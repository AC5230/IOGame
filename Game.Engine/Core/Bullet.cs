﻿namespace Game.Engine.Core
{
    using Newtonsoft.Json;
    using System;
    using System.Linq;
    using System.Numerics;

    public class Bullet : ActorBody
    {
        [JsonIgnore]
        public Fleet OwnedByFleet { get; set; }
        public long TimeDeath { get; set; }

        public bool Seeker { get; set; } = false;

        public float ThrustAmount { get; set; }

        public float Drag { get => World.Hook.Drag; }

        public static void FireFrom(Ship ship)
        {
            var world = ship.World;

            var bullet = new Bullet
            {
                TimeDeath = world.Time + world.Hook.BulletLife,
                Momentum = new Vector2(MathF.Cos(ship.Angle), MathF.Sin(ship.Angle)) * Vector2.Distance(ship.Momentum, Vector2.Zero),
                Position = ship.Position,
                Angle = ship.Angle,
                OwnedByFleet = ship.Fleet,
                Sprite = ship.Fleet.Pickup?.BulletSprite ?? "bullet",
                Size = ship.Fleet.Pickup?.Size ?? 20,
                Color = ship.Color,
                Seeker = ship.Fleet.Pickup != null,
                ThrustAmount = ship.Fleet.Ships.Count() * ship.Fleet.ShotThrustM + ship.Fleet.ShotThrustB
            };
            bullet.Init(world);
        }

        public override void Step()
        {
            base.Step();

            if (Seeker)
            {
                var targets = World.BodiesNear(this.Position, World.Hook.SeekerRange, offsetSize: true);

                var target = targets
                    .OfType<Ship>()
                    .Where(s => s.Fleet != OwnedByFleet)
                    .OrderBy(s => Vector2.Distance(s.Position, Position))
                    .FirstOrDefault();
                if (target != null)
                {
                    var delta = target.Position - Position;
                    Angle = MathF.Atan2(delta.Y, delta.X);
                }
            }
            else
            {

            }


            var thrust = new Vector2(MathF.Cos(Angle), MathF.Sin(Angle)) * ThrustAmount;
            Momentum = (Momentum + thrust) * Drag;


            if (World.Time >= TimeDeath)
                Deinit();
        }

        protected override void Collided(ICollide otherObject)
        {
            TimeDeath = World.Time;
        }
    }
}
