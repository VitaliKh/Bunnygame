class Gameover extends Phaser.State {

  constructor() {
    super();
  }
  
  create() {
      this.add.sprite(0, 0, 'blueBack');
      this.add.sprite(this.game.width * 0.5 - 75, this.game.world.centerY - 300, 'bunny', 0);
      let text = this.add.text(this.game.width * 0.5, this.game.height * 0.5 + 100, "GAME OVER \n Click to restart", {
          font: 'bold 42pt Arial', fill: 'white', align: 'center', wordWrap: true, wordWrapWidth: 450
      });
    text.anchor.set(0.5);

    //this.saveVarsToLocalStorage();
    this.input.onDown.add(this.restartGame, this);
  }

  //saveVarsToLocalStorage(){}
  //resetGlobalVariables(){}

  update() {}

  restartGame () {
    //this.resetGlobalVariables();
    this.game.state.start('boot');
  }

}

export default Gameover;
