
class FlyMan {

  //initialization code in the constructor
  constructor(game, x, y, toRight, toLeft) {
    let flyman = game.game.global.bunny_killers.create(x, y, 'flyMan');
    flyman.width = 38;
    flyman.height = 50;
    flyman.frame = 0;

    game.physics.arcade.enable(flyman);
    //flyman.body.rotation = 90; // try to give rotation

    flyManMove();

    function flyManMove() {
      let tween = game.add.tween(flyman).to({ x: toRight - flyman.width }, game.rnd.between(3500, 5000), "Sine.easeInOut", true, 0, 0, false);
      tween.onComplete.add(moveLeft, flyman);

      function moveLeft() {
        let tween1 = game.add.tween(flyman).to({ x: toLeft }, game.rnd.between(3500, 5000), "Sine.easeInOut", true, 0, 0, false);
        tween1.onComplete.add(flyManMove, flyman);
      }
    }
  }

  update() {
      //this.angle += 0.04; // try to give rotation
  }

}

export default FlyMan;
