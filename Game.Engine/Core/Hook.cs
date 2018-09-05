﻿namespace Game.Engine.Core
{
    public class Hook
    {
        public static Hook Default
        {
            get
            {
                return new Hook
                {
                    BaseThrustM = -0.003f,
                    BaseThrustB = 0.13f,

                    Drag = 0.90f,

                    BoostThrust = 0.1f,
                    BoostCooldownTime = 1200,
                    BoostSpeed = 1f,
                    BoostDuration = 500,

                    ShotCooldownTimeM = 20,
                    ShotCooldownTimeB = 500,

                    ShotThrustM = -0.0035f,
                    ShotThrustB = 0.3f,

                    HealthHitCost = 100,
                    HealthRegenerationPerFrame = 0.0f,
                    MaxHealth = 100,

                    MaxHealthBot = 50,
                    BulletLife = 2000,
                    BotPerXPoints = 500,
                    BotBase = 4,
                    StepTime = 40,
                    Obstacles = 6,
                    ObstacleMaxMomentum = 0.1f,
                    ObstacleMaxSize = 1000,
                    TeamMode = false,

                    SpawnShipCount = 3,

                    FlockAlignment = 0.0f,
                    FlockCohesion = 0.002f,
                    FlockCohesionMaximumDistance = 2000,
                    FlockSeparation = 40f,
                    FlockSeparationMinimumDistance = 200,
                    FlockWeight = 0.14f,

                    ShipGainBySizeM = -0.03f,
                    ShipGainBySizeB = 1.03f,

                    FlockSpeed = 0
                };
            }
        }

        public float BaseThrustM { get; set; }
        public float BaseThrustB { get; set; }

        public float BoostThrust { get; set; }

        public int BoostCooldownTime { get; set; }
        public int BoostDuration { get; set; }
        public float BoostSpeed { get; set; }

        public float Drag { get; set; }

        public int HealthHitCost { get; set; }
        public float HealthRegenerationPerFrame { get; set; }

        public int SpawnShipCount { get; set; }

        public float ShotCooldownTimeM { get; set; }
        public float ShotCooldownTimeB { get; set; }

        public float ShotThrustM { get; set; }
        public float ShotThrustB { get; set; }

        public int MaxHealth { get; set; }
        public int MaxHealthBot { get; set; }
        public int BulletLife { get; set; }
        public int BotBase { get; set; }
        public int BotPerXPoints { get; set; }
        public int Obstacles { get; set; }
        public int Pickups { get; set; } = 25;
        public float ObstacleMaxMomentum { get; set; }
        public int ObstacleMaxSize { get; set; }

        public bool TeamMode { get; set; }


        public float FlockAlignment { get; set; }
        public float FlockCohesion { get; set; }
        public int FlockCohesionMaximumDistance { get; set; }
        public float FlockSeparation { get; set; }
        public int FlockSeparationMinimumDistance { get; set; }
        public float FlockWeight { get; set; }
        public int FlockSpeed { get; set; }

        public int SeekerRange { get; set; } = 2000;

        public float ShipGainBySizeM { get; set; }
        public float ShipGainBySizeB { get; set; }


        public int StepTime { get; set; }
        public float OutOfBoundsBorder { get; set; } = 100;
        public float OutOfBoundsDecayDistance { get; set; } = 1500;
    }
}