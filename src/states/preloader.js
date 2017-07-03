class Preloader extends Phaser.State {

  constructor() {
    super();
    this.asset = null;
    this.ready = false;
  }

  preload() {
    //setup loading bar
    this.asset = this.add.sprite(this.game.width * 0.5 - 110, this.game.height * 0.5 - 10, 'preloader');
    this.load.setPreloadSprite(this.asset);

    //Setup loading and its events
    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    this.loadResources();
  }

  update() {
      if (this.ready) {
        this.game.state.start('menu');
      }
  }

  loadResources() {

      // background
      this.game.load.image('blueBack', 'assets/blueBack.png');
      this.game.load.image('greyBack', 'assets/greyBack.png');
      this.game.load.image('woodBack', 'assets/woodBack.png');
      this.game.load.image('smoke', 'assets/Particles/smoke.png');
      this.game.load.image('sign', 'assets/sign.png');
      this.game.load.image('bunny_girl', 'assets/bunny_girl.png');


      // scores
      this.game.load.image('lifes', 'assets/HUD/lifes.png');
      this.game.load.image('coin_bronze', 'assets/HUD/coin_bronze.png');
      this.game.load.image('coin_silver', 'assets/HUD/coin_silver.png');
      this.game.load.image('coin_gold', 'assets/HUD/coin_gold.png');
      this.game.load.image('carrots', 'assets/HUD/carrots.png');

      // items
      this.game.load.image('carrot', 'assets/Items/carrot.png');
      this.game.load.spritesheet('coin_bronze', 'assets/Items/coin_bronze_spritesheet.png', 84, 84);
      this.game.load.spritesheet('coin_silver', 'assets/Items/coin_silver_spritesheet.png', 84, 84);
      this.game.load.spritesheet('coin_gold', 'assets/Items/coin_gold_spritesheet.png', 84, 84);

      // environment
      this.game.load.image('grass1', 'assets/Environment/grass1.png');
      this.game.load.image('cactus', 'assets/Environment/cactus.png');
      this.game.load.image('mushroom_brown', 'assets/Environment/mushroom_brown.png');
      this.game.load.image('ground_grass', 'assets/Environment/ground_grass.png');
      this.game.load.image('ground_stone', 'assets/Environment/ground_stone.png');
      this.game.load.image('ground_wood', 'assets/Environment/ground_wood.png');
      this.game.load.image('vertical_wall', 'assets/vertical_wall.png');

      //player
      this.game.load.spritesheet('bunny', 'assets/bunny_player/bunny1_spritesheet.png', 150, 200);

      // enemies
      this.game.load.spritesheet('spikeMan', 'assets/Enemies/spikeMan_spritesheet.png', 120, 155);
      this.game.load.spritesheet('flyMan', 'assets/Enemies/flyMan_spritesheet.png', 122, 139);
      this.game.load.spritesheet('wingMan', 'assets/Enemies/wingMan_spritesheet.png', 216, 126);
      this.game.load.spritesheet('spikeBall', 'assets/Enemies/spikeBall_spritesheet.png', 142, 148);

      this.game.load.image('cloud', 'assets/Enemies/cloud.png');
      this.game.load.image('lighting_blue', 'assets/Particles/lighting_blue.png');

      this.game.load.image('springMan', 'assets/Enemies/springMan_stand.png');
      this.game.load.image('orangeParticle', 'assets/Particles/portal_orangeParticle.png');

      this.game.load.image('sun', 'assets/Enemies/sun1.png');
      this.game.load.image('flame', 'assets/Particles/flame.png');

  }

  onLoadComplete() {
    this.ready = true;
  }
}

export default Preloader;
