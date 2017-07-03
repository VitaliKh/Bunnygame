
class Player_bunny extends Phaser.Sprite {

  //initialization code in the constructor
  constructor(game, x, y, frame) {
    super(game, x, y, 'bunny', frame);

      this.game = game; //game reference pure declaration, so that use it in update()
      this.game.global.player = this;

      this.width = 38;
      this.height = 50;
      game.physics.arcade.enable(this);
      this.body.bounce.y = 0.2;
      this.body.gravity.y = 250;
      this.checkWorldBounds = true;
      this.events.onOutOfBounds.add(killPlayer, this.game);
      this.animations.add('left', [6, 7], 10, true); //  Our two animations, walking left and right.
      this.animations.add('right', [4, 5], 10, true);
      game.camera.follow(this, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1); // camera follow player
  }

  update() {

      let hitPlatform = this.game.physics.arcade.collide(this, this.game.global.platforms);

      if (this.alive) {

          this.body.velocity.x = 0;

          if (this.game.global.cursors.left.isDown && !this.game.global.playerDead) {
              //  Move to the left
              this.body.velocity.x = -150;// 150
              this.animations.play('left');

          }
          else if (this.game.global.cursors.right.isDown && !this.game.global.playerDead) {
              //  Move to the right
              this.body.velocity.x = 150; //150
              this.animations.play('right');

          }
          else {
              this.animations.stop();
              if (!this.game.global.playerDead) {
                  this.frame = 3;
              }
          }

          if (this.game.global.cursors.up.isDown && this.body.touching.down && hitPlatform) {
              this.body.velocity.y = -280;
          }
      }

      this.game.physics.arcade.overlap(this, this.game.global.items, collectItems, null, this.game); // player and items collection
      this.game.physics.arcade.overlap(this.game.global.player, this.game.global.bunny_killers, killPlayer, null, this.game);
      this.game.physics.arcade.overlap(this.game.global.player, this.game.global.enemyBullets.children, killPlayer, null, this.game);
  }
}

function collectItems (player, items) {

    let killed = items.kill();

    switch (killed.key) {
        case 'carrot':
            this.global.carrotsScore += 1;
            this.global.carrotsText.text = this.global.carrotsScore;
            break;

        case 'coin_gold':
            this.global.coin_goldScore += 1;
            this.global.coin_goldText.text = this.global.coin_goldScore;
            break;

        case 'coin_silver':
            this.global.coin_silverScore += 1;
            this.global.coin_silverText.text = this.global.coin_silverScore;
            break;

        case 'coin_bronze':
            this.global.coin_bronzeScore += 1;
            this.global.coin_bronzeText.text = this.global.coin_bronzeScore;
            break;
    }

} // collecting items and score updating

function killPlayer (player, bunny_killers) {

    player.inputEnabled = false; // disable controls
    player.body.enable = false; // disable physics for player
    this.global.playerDead = true; // to differ player from standing still
    player.frame = 0;
    player.y -= 40; // move up a little


    let live = this.global.playerLives.getFirstAlive();
    if (live) {
        live.kill();
        this.global.lifesText.text = this.global.playerLives.countLiving();
        if (!this.global.playerLives.countLiving() < 1) {
            this.time.events.add(Phaser.Timer.SECOND * 2, playerReset, this);
        }
    }
    if (this.global.playerLives.countLiving() < 1) {
        player.kill();

        this.state.start('gameover');
    }

    function playerReset () {
        if (player.x < 3200) {
            player.reset(70, this.world.height - 200);
        }
        else if (player.x >= 3200 && player.x < 6400) {
            player.reset(3100, this.world.height - 600);
        }
        else if (player.x >= 6400) {
            player.reset(40 + 6400, this.world.height - 600);
        }


        player.body.enable = true;
        player.inputEnabled = true;
        this.global.playerDead = false;
    }
}



export default Player_bunny;
