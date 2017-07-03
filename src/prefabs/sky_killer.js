
class Sky_killer {

  //initialization code in the constructor
  constructor(game, x, y, toRight, toLeft, name, weaponName) {

      let killer = game.game.global.bunny_killers.create(x, y + 50, name);
      killer.width = 55;
      killer.height = 50;

      sky_killerMove();
      sky_killerWeapon();

      function sky_killerMove() {
          let tween = game.add.tween(killer).to({x: toRight - killer.width}, game.rnd.between(3500, 5000), "Sine.easeInOut", true, 0, 0, false);
          tween.onComplete.add(moveLeft, killer);
      }
      function moveLeft() {
          let tween1 = game.add.tween(killer).to({x: toLeft}, game.rnd.between(3500, 5000), "Sine.easeInOut", true, 0, 0, false);
          tween1.onComplete.add(sky_killerMove, killer);
      }
      function sky_killerWeapon() {

          let sky_killerWeapon = game.add.weapon(1, weaponName);
          sky_killerWeapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS; //  The bullet will be automatically killed when it leaves the world bounds
          sky_killerWeapon.bulletAngleOffset = 90;
          sky_killerWeapon.fireAngle = 90;
          sky_killerWeapon.autofire = true;
          sky_killerWeapon.fireRate = game.rnd.between(2500, 3500);
          sky_killerWeapon.bulletSpeed = 300;
          sky_killerWeapon.trackSprite(killer, 20, 100);
          game.game.global.enemyBullets.addChild(sky_killerWeapon.bullets);
      }
  }
}

class Cloud extends Sky_killer {

    //initialization code in the constructor
    constructor(game, x, y, toRight, toLeft) {
      super(game, x, y, toRight, toLeft, 'cloud', 'lighting_blue');
    }
}

class Sun extends Sky_killer {

    //initialization code in the constructor
    constructor(game, x, y, toRight, toLeft) {
        super(game, x, y, toRight, toLeft, 'sun', 'flame');
    }
}


export { Cloud, Sun };
