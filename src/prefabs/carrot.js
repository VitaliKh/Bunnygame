
class Carrot extends Phaser.Sprite {

  //initialization code in the constructor
  constructor(game) {

    super();
    let carrot = game.game.global.items.create(game.world.randomX, 0, 'carrot');
    carrot.body.gravity.y = 40;
    carrot.body.bounce.y = 0.4;
    carrot.width = 50;
    carrot.height = 50;
  }

}

export default Carrot;
