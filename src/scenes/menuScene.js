export class MenuScene extends Phaser.Scene{

    constructor(){
        super({key:'menu-scene'});
    }
    
   
    create(){
        let a = this.answerText = this.add.text(
            600,
            400,
            'Class D',
            {
                color: '#FFFF00',
                fontSize: '64px'
            }
            ).setOrigin(0.5).setInteractive();
        let b =this.answerText = this.add.text(
                600,
                500,
                'Class E',
                {
                    color: '#FFFF00',
                    fontSize: '64px'
                }
                ).setOrigin(0.5).setInteractive();

        let c = this.answerText = this.add.text(
                600,
                300,
                'Class C',
                {
                    color: '#FFFF00',
                    fontSize: '64px'
                }
                ).setOrigin(0.5).setInteractive();

        let d = this.answerText = this.add.text(
                600,
                200,
                'Class A',
                 {
                    color: '#FFFF00',
                    fontSize: '64px'
                }
                ).setOrigin(0.5).setInteractive();
        a.on('pointerup', () => {
            this.scene.start('game-scene', {classNumber:1});
        });
        b.on('pointerup', () => {
            this.scene.start('game-scene', {classNumber:2});
        });
        c.on('pointerup', () => {
            this.scene.start('game-scene', {classNumber:3});
        });
        d.on('pointerup', () => {
            this.scene.start('game-scene', {classNumber:4});
        });
    }
}