
import Coin from './coin';
import SpikeMan from './spikeMan';
import SpikeBall from './spikeBall';
import SpringMan from './springMan';

class Platform {

  //initialization code in the constructor
  constructor(game, x, y, spriteNameSource, width, immovableBoolean, coins_name) {
    this.game = game;
    let platform = game.game.global.platforms.create(x, y, spriteNameSource);

    platform.width = width;
    platform.height = 50;
    platform.body.enable = true;
    platform.body.immovable = immovableBoolean;

    if (coins_name) {
      switch (width) {
        case game.game.global.LONG_GROUND_WIDTH:
          new Coin(game, x + 50, y, coins_name);
          new Coin(game, x + 120, y, coins_name);
          break;

        case game.game.global.MIDDLE_GROUND_WIDTH:
          new Coin(game, x + 30, y, coins_name);
          break;

        case game.game.global.SHORT_GROUND_WIDTH:
          new Coin(game, x + 30, y, coins_name);
          break;
      }
    }
  }

  update() {

  }

}

class Platform_grass extends  Platform {

  constructor(game, x, y, width, immovableBoolean, coins_name) {
    super(game, x, y, 'ground_grass', width, immovableBoolean, coins_name);

    if (width == game.game.global.LONG_GROUND_WIDTH && coins_name != null) {
      new SpikeMan(game, x, y, x + width, x);
    }

    let grass1Pos;
    let cactusPos;
    switch (width) {
      case game.game.global.LONG_GROUND_WIDTH:
        grass1Pos = x + 38;
        cactusPos = x + 150;
        break;

        case game.game.global.MIDDLE_GROUND_WIDTH:
            grass1Pos = x + 38;
            cactusPos = x + 76;
            break;

        case game.game.global.SHORT_GROUND_WIDTH:
            grass1Pos = x + 20;
            cactusPos = x + 25;
            break;
    }
    let grass1 =  game.game.global.environments.create(grass1Pos, y - 50, 'grass1');
    grass1.width = 38;
    grass1.height = 50;

    let cactus =  game.game.global.environments.create(cactusPos, y - 50, 'cactus');
    cactus.width = 38;
    cactus.height = 50;

  }

}

class Platform_stone extends  Platform {

    constructor(game, x, y, width, immovableBoolean, coins_name) {
      super(game, x, y, 'ground_stone', width, immovableBoolean, coins_name);

      if(width == game.game.global.LONG_GROUND_WIDTH  && coins_name != null) {
        new SpikeBall(game, x, y, x + width, x);
      } else if (width == game.game.global.MIDDLE_GROUND_WIDTH && coins_name != null) {
        new SpringMan(game, x, y, y - 100, y);
      }
    }

}

class Platform_wood extends  Platform {

    constructor(game, x, y, width, immovableBoolean, coins_name) {
      super(game, x, y, 'ground_wood', width, immovableBoolean, coins_name);

      if(width == game.game.global.LONG_GROUND_WIDTH  && coins_name != null) {
        new SpikeMan(game, x, y, x + width, x);
      }

      let mushroom_brownPos;
      switch (width) {
        case game.game.global.LONG_GROUND_WIDTH:
          mushroom_brownPos = x + 110;
          break;

        case game.game.global.MIDDLE_GROUND_WIDTH:
          mushroom_brownPos = x + 65;
          break;

        case game.game.global.SHORT_GROUND_WIDTH:
          mushroom_brownPos = x + 20;
          break;
      }

      let mushroom_brown =  game.game.global.environments.create(mushroom_brownPos, y - 50, 'mushroom_brown');
      mushroom_brown.width = 38;
      mushroom_brown.height = 50;
    }


}

class Vertical_wall {

    //initialization code in the constructor
    constructor(game, x, y, index) {

        let wall = game.game.global.platforms.create(x, y, 'vertical_wall', '', true, index);
        wall.width = 30;
        wall.height = 100;
        wall.scale.setTo(0.5, 8);
        wall.body.enable = true;
        wall.body.immovable = true;

    }

}

export { Platform_grass, Platform_stone, Platform_wood, Vertical_wall };
