
class GameEnd extends Phaser.State {

    constructor() {
        super();
    }

    create() {
        this.add.sprite(0, 0, 'blueBack');
        this.add.sprite(this.game.width * 0.5 - 150, this.game.world.centerY - 300, 'bunny', 3);
        this.add.sprite(this.game.width * 0.5 + 50, this.game.world.centerY - 300, 'bunny_girl', 0);
        let text = this.add.text(this.game.width * 0.5, this.game.height * 0.5 + 100, "YOU WON \n Click to play again", {
            font: 'bold 32pt Arial', fill: 'white', align: 'center', wordWrap: true, wordWrapWidth: 450
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

export default GameEnd;