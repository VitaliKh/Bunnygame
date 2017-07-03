
class Coin extends Phaser.Sprite {

  //initialization code in the constructor
  constructor(game, x, y, name) {
    super();

    let coin = game.game.global.items.create(x, y - 70, name);
    coin.width = 38;
    coin.height = 50;
    coin.animations.add('round', [0, 1, 2, 3, 4, 5], 5, true);
    coin.animations.play('round');
  }

}

export default Coin;
