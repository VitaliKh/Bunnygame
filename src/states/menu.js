class Menu extends Phaser.State {

  constructor() {
    super();
  }
  
  create() {

    this.add.sprite(0, 0, 'blueBack');
    this.add.sprite(this.game.width * 0.5 - 75, this.game.height * 0.5 - 300, 'bunny', 3);
    let text = this.add.text(this.game.width * 0.5, this.game.height * 0.5 + 100, "WELCOME TO BUNNY JUMPER GAME! \n\n\nUse arrows to control bunny's move.\n" +
      "The goal is to meet bunny's girl and collect as many carrots as you can.\n" +
      "To break the walls between stages you need to collect all coins at the stage.\n" +
      "Oh, by the way, mind the foes around!\n\n\n" +
      "CLICK TO START", {
        font: 'bold 21px Arial', fill: 'white', align: 'center', wordWrap: true, wordWrapWidth: 450
    });
    text.anchor.set(0.5);

    this.input.onDown.add(this.startGame, this);
  }

  update() {}

  startGame () {
    this.game.state.start('game');
  }

}

export default Menu;
