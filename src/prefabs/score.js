
class Score {

  //initialization code in the constructor
  constructor(game, name, x) {
      let scoreImg = game.add.sprite(x, 16, name);
      scoreImg.width = 20;
      scoreImg.height = 20;
      scoreImg.fixedToCamera = true;

      switch (name) {
          case 'lifes':
              game.global.lifesText = game.add.text(x + 30, 16,game.global.lifesScore, {fontSize: '20px', fill: '#000'});
              game.global.lifesText.fixedToCamera = true;
              break;

          case 'carrots':
              game.global.carrotsText = game.add.text(x + 30, 16, game.global.carrotsScore, {fontSize: '20px', fill: '#000'});
              game.global.carrotsText.fixedToCamera = true;
              break;

          case 'coin_gold':
              game.global.coin_goldText = game.add.text(x + 30, 16,  game.global.coin_goldScore, {fontSize: '20px', fill: '#000'});
              game.global.coin_goldText.fixedToCamera = true;
              break;

          case 'coin_silver':
              game.global.coin_silverText = game.add.text(x + 30, 16, game.global.coin_silverScore, {fontSize: '20px', fill: '#000'});
              game.global.coin_silverText.fixedToCamera = true;
              break;

          case 'coin_bronze':
              game.global.coin_bronzeText = game.add.text(x + 30, 16, game.global.coin_bronzeScore, {fontSize: '20px', fill: '#000'});
              game.global.coin_bronzeText.fixedToCamera = true;
              break;
      }
  }
}

export default Score;
