
class Smoke_cloud extends Phaser.Sprite {

  //initialization code in the constructor
  constructor(game, x, y) {
    super(game, x + game.rnd.between(10, 120), y - game.rnd.between(10, 120), 'smoke');
  }

}

export default Smoke_cloud;
