
class SpikeMan extends Phaser.Sprite {

  //initialization code in the constructor
  constructor(game, x, y, toRight, toLeft) {
    super();

    let spikeMen = game.game.global.bunny_killers.create(x, y - 50, 'spikeMan');
    spikeMen.width = 38;
    spikeMen.height = 50;
    spikeMen.animations.add('goleft', [4, 5], 7, true);
    spikeMen.animations.add('goright', [2, 3], 7, true);

    spikeMenMove(toRight, toLeft);

    function spikeMenMove() {
      spikeMen.animations.stop();
      spikeMen.play('goright');
      let tween = game.add.tween(spikeMen).to({ x: toRight - spikeMen.width }, game.rnd.between(3500, 5000), "Sine.easeInOut", true, 0, 0, false);
      tween.onComplete.add(moveLeft, this);

      function moveLeft() {
        spikeMen.animations.stop();
        spikeMen.play('goleft');
        let tween1 = game.add.tween(spikeMen).to({ x: toLeft }, game.rnd.between(3500, 5000), "Sine.easeInOut", true, 0, 0, false);
        tween1.onComplete.add(spikeMenMove, this);
      }
    } // spikeMen move function
  }
}

export default SpikeMan;
