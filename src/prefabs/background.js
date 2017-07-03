
class Background extends Phaser.Sprite {

    //initialization code in the constructor
    constructor(game, x, y, key) {
        super(game, x, y, key);
        this.width = 3200;
        this.height = 800;
    }

}

class Sign extends Phaser.Sprite {

    //initialization code in the constructor
    constructor(game, x, y) {
        super(game, x, y, 'sign');
        this.width = 50;
        this.height = 50;
    }
}

class Bunny_girl extends Phaser.Sprite {

    //initialization code in the constructor
    constructor(game, x, y) {
        super(game, x, y, 'bunny_girl');
        game.game.global.bunny_girl = this;
        game.physics.arcade.enable(this);
        this.width = 38;
        this.height = 50;
    }
}


export { Background, Sign, Bunny_girl };
