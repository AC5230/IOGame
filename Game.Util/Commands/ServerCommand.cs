﻿namespace Game.Util.Commands
{
    using McMaster.Extensions.CommandLineUtils;
    using System;
    using System.Linq;
    using System.Threading.Tasks;

    [Subcommand("get", typeof(Get))]
    [Subcommand("reset", typeof(Reset))]
    [Subcommand("announce", typeof(Announce))]
    [Subcommand("connections", typeof(Connections))]
    [Subcommand("hook", typeof(Hook))]
    class ServerCommand : CommandBase
    {
        class Get : CommandBase
        {
            protected async override Task ExecuteAsync()
            {
                var started = DateTime.Now;

                var server = await API.Server.ServerGetAsync();

                Table("Server", new
                {
                    Server = API.BaseURL.ToString(),
                    ms = DateTime.Now.Subtract(started).TotalMilliseconds,
                    Players = server.PlayerCount
                });
            }
        }

        class Reset : CommandBase
        {
            protected async override Task ExecuteAsync()
            {
                await API.Server.ServerResetAsync();
            }
        }

        class Announce : CommandBase
        {
            [Argument(0)]
            public string Message { get; set; } = null;

            protected async override Task ExecuteAsync()
            {
                if (Message != null)
                    await API.Server.AnnounceAsync(Message);
            }
        }

        class Connections : CommandBase
        {
            protected async override Task ExecuteAsync()
            {
                var connections = await API.Server.ConnectionsAsync();

                Table("Connections", connections.Select(c =>
                    new
                    {
                        c.Name,
                        c.IP,
                        c.IsAlive,
                        c.Score
                    }));
            }
        }

        class Hook : CommandBase
        {
            [Argument(0)]
            public string HookJSON { get; set; } = null;

            protected async override Task ExecuteAsync()
            {
                var hook = await API.Server.HookAsync(HookJSON);

                Console.WriteLine(hook);
            }
        }
    }
}
