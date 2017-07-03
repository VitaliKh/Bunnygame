class Boot extends Phaser.State {

  constructor() {
    super();
  }

  preload() {
    this.load.image('preloader', '../../assets/preloader.gif');
  }

  create() {
    this.game.input.maxPointers = 1;

    //setup device scaling
    if (this.game.device.desktop) {
      this.game.scale.pageAlignHorizontally = true;
    } else {
      this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      this.game.scale.minWidth =  480;
      this.game.scale.minHeight = 260;
      this.game.scale.maxWidth = 640;
      this.game.scale.maxHeight = 480;
      this.game.scale.forceOrientation(true);
      this.game.scale.pageAlignHorizontally = true;
      this.game.scale.setSize();
    }

    this.initGlobalVariables();

    this.game.state.start('preloader');
  }

  initGlobalVariables(){
    this.game.global = {
        platforms: null,
        environments: null,
        bunny_girl: undefined,
        items: null,
        bunny_killers: null,
        enemyBullets: null,

        LONG_GROUND_WIDTH: 200,
        MIDDLE_GROUND_WIDTH: 120,
        SHORT_GROUND_WIDTH: 75,

        cursors: null,

        player: null,
        playerDead: false,
        playerLives: null,
        // score
        lifesScore: 6, // initializes number of player's lifes
        lifesText: null,
        carrotsScore: 0,
        carrotsText: null,
        coin_bronzeScore: 0,
        coin_bronzeText: null,
        coin_silverScore: 0,
        coin_silverText: null,
        coin_goldScore: 0,
        coin_goldText: null,
    };
  }

}

export default Boot;
