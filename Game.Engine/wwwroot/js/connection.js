﻿(function () {
    var Connection = function() {

        this.onView = function (view) { };
        this.onLeaderboard = function (leaderboard) { };

        this.reloading = false;
        this.connected = false;
        this.connect();

        this.statBytesUp = 0;
        this.statBytesDown = 0;
        this.statBytesDownPerSecond = 0;
        this.statBytesUpPerSecond = 0;

        var self = this;
        this.fb = Game.Engine.Networking.FlatBuffers;
        this.latency = 0;

        setInterval(function () {
            if (self.connected) {
                self.sendPing();
            }

            self.statBytesDownPerSecond = self.statBytesDown;
            self.statBytesUpPerSecond = self.statBytesUp;

            self.statBytesUp = 0;
            self.statBytesDown = 0;
        }, 1000);
    }

    Connection.prototype = {

        connect: function () {
            var url;
            if (window.location.protocol === "https:") {
                url = "wss:";
            } else {
                url = "ws:";
            }
            url += "//" + window.location.host;
            url += "/api/v1/connect";

            this.socket = new WebSocket(url);
            this.socket.binaryType = "arraybuffer";

            var self = this;

            this.socket.onmessage = function (event) { self.onMessage(event); };
            this.socket.onopen = function (event) { self.onOpen(event); };
            this.socket.onclose = function (event) { self.onClose(event); };

        },
        sendHook: function (hook) {
            //this.send(hook);
        },
        sendPing: function () {

            var builder = new flatbuffers.Builder(0);

            this.fb.NetPing.startNetPing(builder);

            this.pingSent = performance.now();

            //this.fb.Ping.addTime(builder, this.pingSent);
            var ping = this.fb.NetPing.endNetPing(builder);


            this.fb.NetQuantum.startNetQuantum(builder);
            this.fb.NetQuantum.addMessageType(builder, this.fb.AllMessages.NetPing);
            this.fb.NetQuantum.addMessage(builder, ping);
            var quantum = this.fb.NetQuantum.endNetQuantum(builder);

            builder.finish(quantum);

            this.send(builder.asUint8Array());
        },
        sendSpawn: function (name, color, ship) {

            var builder = new flatbuffers.Builder(0);

            var stringColor = builder.createString(color || "gray");
            var stringName = builder.createString(name || "unknown");
            var stringShip = builder.createString(ship || "ship_gray");

            this.fb.NetSpawn.startNetSpawn(builder);
            this.fb.NetSpawn.addColor(builder, stringColor);
            this.fb.NetSpawn.addName(builder, stringName);
            this.fb.NetSpawn.addShip(builder, stringShip);
            var spawn = this.fb.NetSpawn.endNetSpawn(builder);

            this.fb.NetQuantum.startNetQuantum(builder);
            this.fb.NetQuantum.addMessageType(builder, this.fb.AllMessages.NetSpawn);
            this.fb.NetQuantum.addMessage(builder, spawn);
            var quantum = this.fb.NetQuantum.endNetQuantum(builder);

            builder.finish(quantum);

            this.send(builder.asUint8Array());
            console.log('spawned');

        },
        sendControl: function (angle, boost, shoot) {
            var builder = new flatbuffers.Builder(0);

            this.fb.NetControlInput.startNetControlInput(builder);
            this.fb.NetControlInput.addAngle(builder, angle);
            this.fb.NetControlInput.addBoost(builder, boost);
            this.fb.NetControlInput.addShoot(builder, shoot);
            var input = this.fb.NetControlInput.endNetControlInput(builder);

            this.fb.NetQuantum.startNetQuantum(builder);
            this.fb.NetQuantum.addMessageType(builder, this.fb.AllMessages.NetControlInput);
            this.fb.NetQuantum.addMessage(builder, input);
            var quantum = this.fb.NetQuantum.endNetQuantum(builder);

            builder.finish(quantum);

            this.send(builder.asUint8Array());
        },
        send: function (databuffer) {
            if (this.socket.readyState === 1) {
                this.socket.send(databuffer);
                this.statBytesUp += databuffer.length;
            }
        },
        onOpen: function (event) {
            this.connected = true;
            console.log('connected');

            if (this.reloading)
                window.location.reload();
        },
        onClose: function (event) {
            console.log('disconnected');
            this.connected = false;
            this.reloading = true;
            this.connect();
        },
        onMessage: function (event) {

            var data = new Uint8Array(event.data);
            var buf = new flatbuffers.ByteBuffer(data);

            this.statBytesDown += data.byteLength;

            var quantum = this.fb.NetQuantum.getRootAsNetQuantum(buf);

            var messageType = quantum.messageType();

            switch (messageType) {
                case this.fb.AllMessages.NetWorldView:

                    var message = quantum.message(new this.fb.NetWorldView());

                    this.onView(message);
                    break;
                case this.fb.AllMessages.NetPing: // Ping
                    this.latency = performance.now() - this.pingSent;
                    break;
                case this.fb.AllMessages.NetLeaderboard:
                    var message = quantum.message(new this.fb.NetLeaderboard());

                    var entriesLength = message.entriesLength();
                    var entries = [];
                    for (var i = 0; i < entriesLength; i++) {
                        var entry = message.entries(i);

                        entries.push({
                            Name: entry.name(),
                            Color: entry.color(),
                            Score: entry.score()
                        });
                    }

                    this.onLeaderboard({
                        Type: message.type(),
                        Entries: entries
                    });
                    break;
            }
        }
    };

    Game.Connection = Connection;
}).call(this);