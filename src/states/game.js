
import { Background, Sign, Bunny_girl } from '../prefabs/background';
import Player_bunny from '../prefabs/player_bunny';
import Smoke_cloud from '../prefabs/smoke_cloud';
import { Platform_grass, Platform_stone, Platform_wood, Vertical_wall } from '../prefabs/platform';
import Carrot from '../prefabs/carrot';
import {Cloud, Sun} from  '../prefabs/sky_killer';
import FlyMan from '../prefabs/flyMan';
import WingMan from '../prefabs/wingMan'
import Score from '../prefabs/score'

class Game extends Phaser.State {

    constructor() {
        super();
    }

    create() {

        // initialize world settings
        this.game.physics.setBoundsToWorld(true, true, false, false);
        this.game.world.setBounds(0, 0, 9600, 800);
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        // initialize input controls
        this.game.global.cursors = this.input.keyboard.createCursorKeys();

        // add sprites to the game
        // add background
        this.add.existing(new Background(this, 0, 0, 'blueBack'));
        this.add.existing(new Background(this, 3200, 0, 'greyBack'));
        this.add.existing(new Background(this, 6400, 0, 'woodBack'));
        // add smoke clouds
        this.add.existing(new Smoke_cloud(this, 200, 200));
        this.add.existing(new Smoke_cloud(this, 400, 400));
        this.add.existing(new Smoke_cloud(this, 600, 600));
        this.add.existing(new Smoke_cloud(this, 800, 400));
        this.add.existing(new Smoke_cloud(this, 1000, 200));
        this.add.existing(new Smoke_cloud(this, 1200, 400));
        this.add.existing(new Smoke_cloud(this, 1400, 600));
        this.add.existing(new Smoke_cloud(this, 1600, 400));
        this.add.existing(new Smoke_cloud(this, 1800, 200));
        this.add.existing(new Smoke_cloud(this, 2000, 400));
        this.add.existing(new Smoke_cloud(this, 2200, 600));
        this.add.existing(new Smoke_cloud(this, 2400, 400));
        this.add.existing(new Smoke_cloud(this, 2600, 200));
        this.add.existing(new Smoke_cloud(this, 2800, 400));
        this.add.existing(new Smoke_cloud(this, 3000, 600));
        // add signs to show end of stage
        this.add.existing(new Sign(this, 3090, this.world.height - 500 + 20 - 50));
        this.add.existing(new Sign(this, 3090 + 3200, this.world.height - 350 - 10 - 50));
        this.add.existing(new Sign(this, 3020 + 6400, this.world.height - 100));
        // add bunny_girl at the end of the game
        this.game.global.bunny_girl = this.add.group();
        this.game.global.bunny_girl.enableBody = true;
        this.add.existing(new Bunny_girl(this, 3150 + 6400, this.world.height - 100));

        // add platforms
        this.game.global.platforms = this.add.group();
        this.game.global.platforms.enableBody = true;
        this.game.global.environments = this.add.group();
        this.game.global.environments.enableBody = true;

        this.game.global.items = this.add.group();
        this.game.global.items.enableBody = true;
        for (let i = 0; i < 90; i++) {
            new Carrot(this);
        } // carrots in the world

        this.game.global.bunny_killers = this.add.group();
        this.game.global.bunny_killers.enableBody = true;

        this.game.global.enemyBullets = this.add.group();

        // platform levels
        const LEVEL_0 = this.world.height - 50;
        const LEVEL_1 = this.world.height - 200;
        const LEVEL_2 = this.world.height - 350;
        const LEVEL_3 = this.world.height - 500;

        new Platform_grass(this, 0, LEVEL_0, this.game.global.LONG_GROUND_WIDTH, true, null);
        new Platform_grass(this, 200, LEVEL_1, this.game.global.LONG_GROUND_WIDTH, true, 'coin_bronze');
        new Platform_grass(this, 350, LEVEL_0, this.game.global.MIDDLE_GROUND_WIDTH, true, 'coin_bronze');
        new Platform_grass(this, 400, LEVEL_2, this.game.global.MIDDLE_GROUND_WIDTH, true, 'coin_bronze');
        new Platform_grass(this, 600, LEVEL_3, this.game.global.SHORT_GROUND_WIDTH, true, 'coin_bronze');
        new Platform_grass(this, 790, LEVEL_2, this.game.global.SHORT_GROUND_WIDTH, true, 'coin_bronze');

        new Platform_grass(this, 850, LEVEL_0 - 10, this.game.global.MIDDLE_GROUND_WIDTH, true, 'coin_bronze');
        new Platform_grass(this, 1100, LEVEL_1 - 10, this.game.global.MIDDLE_GROUND_WIDTH, true, 'coin_bronze');
        new Platform_grass(this, 1100, LEVEL_3, this.game.global.LONG_GROUND_WIDTH, true, 'coin_bronze');
        new Platform_grass(this, 1400, LEVEL_2 - 10, this.game.global.SHORT_GROUND_WIDTH, true, 'coin_bronze');
        new Platform_grass(this, 1600, LEVEL_3, this.game.global.LONG_GROUND_WIDTH, true, 'coin_bronze');
        new Platform_grass(this, 1600, LEVEL_1 + 30, this.game.global.LONG_GROUND_WIDTH, true, 'coin_bronze');

        new Platform_grass(this, 1900, LEVEL_1 + 10, this.game.global.SHORT_GROUND_WIDTH, true, 'coin_bronze');
        new Platform_grass(this, 2100, LEVEL_3, this.game.global.MIDDLE_GROUND_WIDTH, true, 'coin_bronze');
        new Platform_grass(this, 2200, LEVEL_0, this.game.global.LONG_GROUND_WIDTH, true, 'coin_bronze');
        new Platform_grass(this, 2200, LEVEL_2 + 20, this.game.global.MIDDLE_GROUND_WIDTH, true, 'coin_bronze');
        new Platform_grass(this, 2400, LEVEL_2 - 10, this.game.global.LONG_GROUND_WIDTH, true, 'coin_bronze');

        new Platform_grass(this, 2500, LEVEL_3 - 20, this.game.global.LONG_GROUND_WIDTH, true, 'coin_bronze');
        new Platform_grass(this, 2600, LEVEL_1, this.game.global.SHORT_GROUND_WIDTH, true, 'coin_bronze');
        new Platform_grass(this, 2700, LEVEL_0, this.game.global.SHORT_GROUND_WIDTH, true, 'coin_bronze');
        new Platform_grass(this, 2750, LEVEL_2 + 20, this.game.global.LONG_GROUND_WIDTH, true, 'coin_bronze');
        new Platform_grass(this, 2900, LEVEL_0 + 10, this.game.global.LONG_GROUND_WIDTH, true, 'coin_bronze');
        new Platform_grass(this, 3080, LEVEL_3 + 20, this.game.global.MIDDLE_GROUND_WIDTH, true, null);


        new Platform_stone(this, 0 + 3200, LEVEL_0 - 10, this.game.global.MIDDLE_GROUND_WIDTH, true, 'coin_silver');
        new Platform_stone(this, 150 + 3200, LEVEL_3, this.game.global.LONG_GROUND_WIDTH, true, 'coin_silver');
        new Platform_stone(this, 200 + 3200, LEVEL_1 - 10, this.game.global.MIDDLE_GROUND_WIDTH, true, 'coin_silver');
        new Platform_stone(this, 400 + 3200, LEVEL_2 - 10, this.game.global.SHORT_GROUND_WIDTH, true, 'coin_silver');
        new Platform_stone(this, 600 + 3200, LEVEL_3, this.game.global.LONG_GROUND_WIDTH, true, 'coin_silver');
        new Platform_stone(this, 685 + 3200, LEVEL_1 + 30, this.game.global.LONG_GROUND_WIDTH, true, 'coin_silver');

        new Platform_stone(this, 850 + 3200, LEVEL_3 - 20, this.game.global.LONG_GROUND_WIDTH, true, 'coin_silver');
        new Platform_stone(this, 1100 + 3200, LEVEL_1, this.game.global.SHORT_GROUND_WIDTH, true, 'coin_silver');
        new Platform_stone(this, 1100 + 3200, LEVEL_2 - 40, this.game.global.SHORT_GROUND_WIDTH, true, 'coin_silver');
        new Platform_stone(this, 1400 + 3200, LEVEL_2 + 20, this.game.global.LONG_GROUND_WIDTH, true, 'coin_silver');
        new Platform_stone(this, 1600 + 3200, LEVEL_1, this.game.global.LONG_GROUND_WIDTH, true, 'coin_silver');
        new Platform_stone(this, 1600 + 3200, LEVEL_3 + 20, this.game.global.MIDDLE_GROUND_WIDTH, true, 'coin_silver');

        new Platform_stone(this, 1900 + 3200, LEVEL_0, this.game.global.LONG_GROUND_WIDTH, true, 'coin_silver');
        new Platform_stone(this, 2100 + 3200, LEVEL_1, this.game.global.LONG_GROUND_WIDTH, true, 'coin_silver');
        new Platform_stone(this, 2200 + 3200, LEVEL_0, this.game.global.MIDDLE_GROUND_WIDTH, true, 'coin_silver');
        new Platform_stone(this, 2200 + 3200, LEVEL_2, this.game.global.MIDDLE_GROUND_WIDTH, true, 'coin_silver');
        new Platform_stone(this, 2400 + 3200, LEVEL_3, this.game.global.SHORT_GROUND_WIDTH, true, 'coin_silver');
        new Platform_stone(this, 2500 + 3200, LEVEL_2 + 10, this.game.global.SHORT_GROUND_WIDTH, true, 'coin_silver');

        new Platform_stone(this, 2600 + 3200, LEVEL_1 + 10, this.game.global.SHORT_GROUND_WIDTH, true, 'coin_silver');
        new Platform_stone(this, 2700 + 3200, LEVEL_3, this.game.global.MIDDLE_GROUND_WIDTH, true, 'coin_silver');
        new Platform_stone(this, 2750 + 3200, LEVEL_0, this.game.global.LONG_GROUND_WIDTH, true, 'coin_silver');
        new Platform_stone(this, 2900 + 3200, LEVEL_2 + 20, this.game.global.MIDDLE_GROUND_WIDTH, true, 'coin_silver');
        new Platform_stone(this, 3080 + 3200, LEVEL_2 - 10, this.game.global.MIDDLE_GROUND_WIDTH, true, null);


        new Platform_wood(this, this.world.width - 3080 - this.game.global.MIDDLE_GROUND_WIDTH, LEVEL_3 + 20, this.game.global.MIDDLE_GROUND_WIDTH, true, 'coin_gold');
        new Platform_wood(this, this.world.width - 2900 - this.game.global.LONG_GROUND_WIDTH, LEVEL_0 + 10, this.game.global.LONG_GROUND_WIDTH, true, 'coin_gold');
        new Platform_wood(this, this.world.width - 2750 - this.game.global.LONG_GROUND_WIDTH, LEVEL_2 + 20, this.game.global.LONG_GROUND_WIDTH, true, 'coin_gold');
        new Platform_wood(this, this.world.width - 2700 - this.game.global.SHORT_GROUND_WIDTH, LEVEL_0, this.game.global.SHORT_GROUND_WIDTH, true, 'coin_gold');
        new Platform_wood(this, this.world.width - 2600 - this.game.global.SHORT_GROUND_WIDTH, LEVEL_1, this.game.global.SHORT_GROUND_WIDTH, true, 'coin_gold');
        new Platform_wood(this, this.world.width - 2500 - this.game.global.LONG_GROUND_WIDTH, LEVEL_3 - 20, this.game.global.LONG_GROUND_WIDTH, true, 'coin_gold');

        new Platform_wood(this, this.world.width - 2400 - this.game.global.LONG_GROUND_WIDTH, LEVEL_2 - 10, this.game.global.LONG_GROUND_WIDTH, true, 'coin_gold');
        new Platform_wood(this, this.world.width - 2200 - this.game.global.MIDDLE_GROUND_WIDTH, LEVEL_2 + 20, this.game.global.MIDDLE_GROUND_WIDTH, true, 'coin_gold');
        new Platform_wood(this, this.world.width - 2200 - this.game.global.LONG_GROUND_WIDTH, LEVEL_0, this.game.global.LONG_GROUND_WIDTH, true, 'coin_gold');
        new Platform_wood(this, this.world.width - 2100 - this.game.global.MIDDLE_GROUND_WIDTH, LEVEL_3, this.game.global.MIDDLE_GROUND_WIDTH, true, 'coin_gold');
        new Platform_wood(this, this.world.width - 1900 - this.game.global.SHORT_GROUND_WIDTH, LEVEL_1 + 10, this.game.global.SHORT_GROUND_WIDTH, true, 'coin_gold');

        new Platform_wood(this, this.world.width - 1600 - this.game.global.LONG_GROUND_WIDTH, LEVEL_1 + 30, this.game.global.LONG_GROUND_WIDTH, true, 'coin_gold');
        new Platform_wood(this, this.world.width - 1600 - this.game.global.LONG_GROUND_WIDTH, LEVEL_3, this.game.global.LONG_GROUND_WIDTH, true, 'coin_gold');
        new Platform_wood(this, this.world.width - 1400 - this.game.global.SHORT_GROUND_WIDTH, LEVEL_2 - 10, this.game.global.SHORT_GROUND_WIDTH, true, 'coin_gold');
        new Platform_wood(this, this.world.width - 1100 - this.game.global.LONG_GROUND_WIDTH, LEVEL_3, this.game.global.LONG_GROUND_WIDTH, true, 'coin_gold');
        new Platform_wood(this, this.world.width - 1100 - this.game.global.MIDDLE_GROUND_WIDTH, LEVEL_1 - 10, this.game.global.MIDDLE_GROUND_WIDTH, true, 'coin_gold');
        new Platform_wood(this, this.world.width - 850 - this.game.global.MIDDLE_GROUND_WIDTH, LEVEL_0 - 10, this.game.global.MIDDLE_GROUND_WIDTH, true, 'coin_gold');

        new Platform_wood(this, this.world.width - 790 - this.game.global.SHORT_GROUND_WIDTH, LEVEL_2, this.game.global.SHORT_GROUND_WIDTH, true, 'coin_gold');
        new Platform_wood(this, this.world.width - 600 - this.game.global.SHORT_GROUND_WIDTH, LEVEL_3, this.game.global.SHORT_GROUND_WIDTH, true, 'coin_gold');
        new Platform_wood(this, this.world.width - 400 - this.game.global.MIDDLE_GROUND_WIDTH, LEVEL_2, this.game.global.MIDDLE_GROUND_WIDTH, true, 'coin_gold');
        new Platform_wood(this, this.world.width - 350 - this.game.global.MIDDLE_GROUND_WIDTH, LEVEL_0, this.game.global.MIDDLE_GROUND_WIDTH, true, 'coin_gold');
        new Platform_wood(this, this.world.width - 200 - this.game.global.LONG_GROUND_WIDTH, LEVEL_1, this.game.global.LONG_GROUND_WIDTH, true, 'coin_gold');
        new Platform_wood(this, this.world.width - 0 - this.game.global.LONG_GROUND_WIDTH, LEVEL_0, this.game.global.LONG_GROUND_WIDTH, true, null);

        // add walls between stages
        new Vertical_wall(this, 3200, 0, 50);
        new Vertical_wall(this, 6400, 0, 51);

        // add sky_killers
        new Sun(this, 300, 0, 600, 300);
        new Sun(this, 700, 0, 1000, 700);
        new Sun(this, 1100, 0, 1400, 1100);
        new Sun(this, 1500, 0, 1800, 1500);
        new Sun(this, 1900, 0, 2200, 1900);
        new Sun(this, 2300, 0, 2600, 2300);
        new Sun(this, 2700, 0, 3000, 2700);

        new Cloud(this, 300 + 3200, 0, 600 + 3200, 300 + 3200);
        new Cloud(this, 700 + 3200, 0, 1000 + 3200, 700 + 3200);
        new Cloud(this, 1100 + 3200, 0, 1400 + 3200, 1100 + 3200);
        new Cloud(this, 1500 + 3200, 0, 1800 + 3200, 1500 + 3200);
        new Cloud(this, 1900 + 3200, 0, 2200 + 3200, 1900 + 3200);
        new Cloud(this, 2300 + 3200, 0, 2600 + 3200, 2300 + 3200);
        new Cloud(this, 2700 + 3200, 0, 3000 + 3200, 2700 + 3200);

        new Sun(this, 300 + 6400, 0, 600 + 6400, 300 + 6400);
        new Cloud(this, 700 + 6400, 0, 1000 + 6400, 700 + 6400);
        new Sun(this, 1100 + 6400, 0, 1400 + 6400, 1100 + 6400);
        new Cloud(this, 1500 + 6400, 0, 1800 + 6400, 1500 + 6400);
        new Sun(this, 1900 + 6400, 0, 2200 + 6400, 1900 + 6400);
        new Cloud(this, 2300 + 6400, 0, 2600 + 6400, 2300 + 6400);
        new Sun(this, 2700 + 6400, 0, 3000 + 6400, 2700 + 6400);

        // add fly_killers
        new FlyMan(this, 400, this.world.height - 350, 700, 300);
        new FlyMan(this, 700, this.world.height - 150, 1100, 700);
        new FlyMan(this, 900, this.world.height - 350, 1300, 900);
        new FlyMan(this, 1100, this.world.height - 650, 1500, 1100);
        new FlyMan(this, 1300, this.world.height - 150, 1700, 1300);
        new FlyMan(this, 1500, this.world.height - 350, 1900, 1500);
        new FlyMan(this, 1700, this.world.height - 650, 2100, 1700);
        new FlyMan(this, 1900, this.world.height - 150, 2300, 1900);
        new FlyMan(this, 2100, this.world.height - 350, 2500, 2100);
        new FlyMan(this, 2300, this.world.height - 650, 2700, 2300);
        new FlyMan(this, 2500, this.world.height - 150, 2900, 2500);
        new FlyMan(this, 2700, this.world.height - 350, 3100, 2700);

        new WingMan(this.game, 400 + 6400, this.world.height - 350, 700 + 6400, 300 + 6400);
        new WingMan(this.game, 700 + 6400, this.world.height - 150, 1100 + 6400, 700 + 6400);
        new WingMan(this.game, 900 + 6400, this.world.height - 350, 1300 + 6400, 900 + 6400);
        new WingMan(this.game, 1100 + 6400, this.world.height - 650, 1500 + 6400, 1100 + 6400);
        new WingMan(this.game, 1300 + 6400, this.world.height - 150, 1700 + 6400, 1300 + 6400);
        new WingMan(this.game, 1500 + 6400, this.world.height - 350, 1900 + 6400, 1500 + 6400);
        new WingMan(this.game, 1700 + 6400, this.world.height - 650, 2100 + 6400, 1700 + 6400);
        new WingMan(this.game, 1900 + 6400, this.world.height - 150, 2300 + 6400, 1900 + 6400);
        new WingMan(this.game, 2100 + 6400, this.world.height - 350, 2500 + 6400, 2100 + 6400);
        new WingMan(this.game, 2300 + 6400, this.world.height - 650, 2700 + 6400, 2300 + 6400);
        new WingMan(this.game, 2500 + 6400, this.world.height - 150, 2900 + 6400, 2500 + 6400);
        new WingMan(this.game, 2700 + 6400, this.world.height - 350, 3100 + 6400, 2700 + 6400);

        // add player
        this.add.existing(new Player_bunny(this.game, 70, this.world.height - 200, 3));
        this.game.global.playerLives = this.add.group();
        for (let i = 0; i < this.game.global.lifesScore; i++) {
            this.game.global.playerLives.create(0, -1060, 'bunny');
        } // iteration creates the number of player's lives

        // add scoring
        new Score(this.game, 'lifes', 20);
        new Score(this.game, 'carrots', 80);
        new Score(this.game, 'coin_gold', 140);
        new Score(this.game, 'coin_silver', 200);
        new Score(this.game, 'coin_bronze', 260);

    }

    update() {
        this.game.physics.arcade.collide(this.game.global.items, this.game.global.platforms);
        this.game.physics.arcade.collide(this.game.global.bunny_killers, this.game.global.platforms);

        let meetBunny_girl = this.game.physics.arcade.overlap(this.game.global.player, this.game.global.bunny_girl);

        if (this.game.global.coin_bronzeScore >= 30) {
            this.game.global.platforms.getAt(50).kill();
        }
        if (this.game.global.coin_silverScore >= 31) {
            this.game.global.platforms.getAt(51).kill();
        }
        if (this.game.global.coin_goldScore >= 31 && meetBunny_girl) {
            this.game.state.start('gameEnd');
        }
    }
}


export default Game;
