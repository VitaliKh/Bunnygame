
class SpikeBall extends Phaser.Sprite {

  //initialization code in the constructor
  constructor(game, x, y, toRight, toLeft) {
    super();

    let spikeBall = game.game.global.bunny_killers.create(x, y - 50, 'spikeBall');
    spikeBall.width = 50;
    spikeBall.height = 50;

    spikeBall.animations.add('rollleft', [0, 1, 3, 2], 7, true);
    spikeBall.animations.add('rollright', [0, 2, 3, 1], 7, true);

    spikeBallMove(toRight, toLeft);

    function spikeBallMove() {
      spikeBall.animations.stop();
      spikeBall.play('rollright');
      let tween = game.add.tween(spikeBall).to({ x: toRight - spikeBall.width }, game.rnd.between(3500, 5000), "Sine.easeInOut", true, 0, 0, false);
      tween.onComplete.add(moveLeft, this);

      function moveLeft() {
        spikeBall.animations.stop();
        spikeBall.play('rollleft');
        let tween1 = game.add.tween(spikeBall).to({ x: toLeft }, game.rnd.between(3500, 5000), "Sine.easeInOut", true, 0, 0, false);
        tween1.onComplete.add(spikeBallMove, this);
      }
    } // spikeMen move function

  }
}

export default SpikeBall;
