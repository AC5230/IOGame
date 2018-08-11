﻿namespace Game.Engine.Core
{
    using System;
    using System.Numerics;

    public class Bullet : ActorBody
    {
        public Fleet Owner { get; set; }
        public long TimeDeath { get; set; }

        public static void FireFrom(Fleet fleet)
        {
            var world = fleet.World;

            var bullet = new Bullet
            {
                TimeDeath = world.Time + world.Hook.BulletLife,
                Momentum = new Vector2(
                        (float)Math.Cos(fleet.Angle),
                        (float)Math.Sin(fleet.Angle)
                    ) * world.Hook.BulletSpeed / 40f,
                Position = fleet.Position,
                Angle = fleet.Angle,
                Owner = fleet,
                Sprite = "bullet",
            };
            bullet.Init(world);
        }

        public override void Step()
        {
            if (World.Time >= TimeDeath)
                Deinit();
        }
    }
}
