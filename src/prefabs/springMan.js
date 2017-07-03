
class SpringMan extends Phaser.Sprite {

  //initialization code in the constructor
  constructor(game, x, y, toUp, toDown) {
    super();

    let springMen = game.game.global.bunny_killers.create(x + 80, y - 50, 'springMan');
    springMen.width = 38;
    springMen.height = 50;

    springMenMove();
    create_springMenWeapon();

    function springMenMove() {
      let tween = game.add.tween(springMen).to({ y: toUp }, 300, null, true, 0, 0, false);
      tween.onComplete.add(moveLeft, this);

      function moveLeft() {
        let tween1 = game.add.tween(springMen).to({ y: toDown - springMen.height }, 300, null, true, 0, 0, false);
        tween1.onComplete.add(springMenMove, this);
      }
    }

    function create_springMenWeapon() {

      let springMenWeapon = game.add.weapon(1, 'orangeParticle');
      springMenWeapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS; //  The bullet will be automatically killed when it leaves the world boundsspringMenWeapon.fireAngle = game.rnd.between(180, 270);
      springMenWeapon.autofire = true;
      springMenWeapon.fireRate = game.rnd.between(1500, 2000);
      springMenWeapon.bulletSpeed = 200;
      springMenWeapon.trackSprite(springMen, 0, 0);
      game.game.global.enemyBullets.addChild(springMenWeapon.bullets);
    }
  }
}

export default SpringMan;
