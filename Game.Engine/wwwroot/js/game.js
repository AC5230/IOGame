﻿(function () {
    var canvas = document.getElementById("gameCanvas");
    var context = canvas.getContext("2d");
    var renderer = new Game.Renderer(context, {});
    var background = new Game.Background(canvas, context, {});
    var renderFrame = requestAnimationFrame;
    var camera = new Game.Camera(context);
    var interpolator = new Game.Interpolator();
    var leaderboard = new Game.Leaderboard(canvas, context);
    var angle = 0.0;

    Game.Controls.registerCanvas(canvas);

    var view = false;
    var lastFrameTime = false;

    var log = function (message) {
        document.getElementById('log').prepend(document.createTextNode(message + '\n'));
    };

    var connection = new Game.Connection();
    window.Game.primaryConnection = connection;

    connection.onView = function (newView) {
        view = newView;
        interpolator.newFrame();
        lastFrameTime = performance.now();

        if (view &&
            view.PlayerView)
        {
            if (view.PlayerView.Leaderboard != null)
                leaderboard.setData(view.PlayerView.Leaderboard);

            if (view.PlayerView.Messages) {
                var messages = view.PlayerView.Messages;
                for (var i = 0; i < messages.length; i++)
                    log(messages[i]);
            }
        }
    };

    var lastControl = {};

    setInterval(function () {
        if (
            angle != lastControl.angle
            || Game.Controls.boost != lastControl.boost
            || Game.Controls.shoot != lastControl.shoot
            || Game.Controls.nick != lastControl.nick
            || Game.Controls.ship != lastControl.ship
        ) {
            connection.sendControl(
                angle,
                Game.Controls.boost,
                Game.Controls.shoot,
                Game.Controls.nick,
                Game.Controls.ship
            );

            lastControl = {
                angle: angle,
                boost: Game.Controls.boost,
                shoot: Game.Controls.shoot,
                nick: Game.Controls.nick,
                ship: Game.Controls.ship
            };
        }
    }, 10);

    document.getElementById('spawn').addEventListener("click", function () {
        connection.sendSpawn(Game.Controls.nick);
    });


    var sizeCanvas = function () {
        var width = window.innerWidth - 20;
        var height = width * 9 / 16;

        canvas.width = width;
        canvas.height = height;

    };

    sizeCanvas();

    window.addEventListener("resize", function () {
        sizeCanvas();
    });


    // Game Loop
    var gameLoop = function () {
        var currentTime = performance.now();
        //console.log('game');
        context.clearRect(0, 0, canvas.width, canvas.height);

        if (view && view.PlayerView) {
            var pv = view.PlayerView;

            var position = interpolator.projectObject(pv, currentTime);

            camera.moveTo(position.X, position.Y);
            camera.zoomTo(3000);
        }

        camera.begin();
        background.draw();

        renderer.view = view;
        renderer.draw(interpolator, currentTime);
        camera.end();


        leaderboard.draw();

        if (Game.Controls.mouseX) {
            var cx = canvas.width / 2;
            var cy = canvas.height / 2;
            var dy = Game.Controls.mouseY - cy
            var dx = Game.Controls.mouseX - cx


            var theta = Math.atan2(dy, dx);
            //console.log([Game.Controls.mouseX, Game.Controls.mouseY, theta]);

            angle = theta;
        }

        /*
        if (Game.Controls.left || Game.Controls.up)
            angle -= 0.1;
        if (Game.Controls.right || Game.Controls.down)
            angle += 0.1;
        */


        renderFrame(gameLoop);
    }

    renderFrame(gameLoop);
})();
