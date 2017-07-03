
class WingMan {

  //initialization code in the constructor
  constructor(game, x, y, toRight, toLeft) {
    let wingman = game.global.bunny_killers.create(x, y, 'wingMan');
    wingman.width = 70;
    wingman.height = 50;
    wingman.animations.add('fly', [0, 1, 2, 3, 4, 3, 2, 1], 10, true);
    wingman.play('fly');

    wingManMove();

    function wingManMove() {
      let tween = game.add.tween(wingman).to({ x: toRight - wingman.width }, game.rnd.between(3500, 5000), "Sine.easeInOut", true, 0, 0, false);
      game.add.tween(wingman).to({ y: y + 100 }, (game.rnd.between(3500, 5000)) / 2, "Sine.easeInOut", true, 0, 0, true);
      tween.onComplete.add(moveLeft, this);

      function moveLeft() {
        let tween1 = game.add.tween(wingman).to({ x: toLeft }, 5000, "Sine.easeInOut", true, 0, 0, false);
        game.add.tween(wingman).to({ y: y - 100 }, (game.rnd.between(3500, 5000)) / 2, "Sine.easeInOut", true, 0, 0, true);
        tween1.onComplete.add(wingManMove, this);
      }
    }
  }
}

export default WingMan;
