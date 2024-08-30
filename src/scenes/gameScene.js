import { WordList } from "../wordList.js";

export class GameScene extends Phaser.Scene{


    squareSize =128;
    padding = 4;
    spaceing = 120; 
    selected = 'none';
    box = [];
    answers = [];
    chinesePrompt = null;
    selectedX = -1;
    selectedY = -1;

    constructor(){
        super({key:'game-scene'});
    }

    preload(){
        this.wordList = new WordList(this);
        this.load.image('stone_team','assets/stone_team.png');
        this.load.image('coin_team','assets/coin_team.png');
        this.load.image('red_x','assets/red_x.png');
        this.load.image('selection_box','assets/selection_box.png');
        this.load.image('question_mark_box','assets/question_mark_box.png');
    }

    create(){
        this. chinesePrompt = this.add.text(
            950,
            40,
            '???',
            {
                color: '#FFFFFF',
                fontSize: '48px'
            }
            ).setOrigin(0.5);
        
        
        let a =this.add.image(860,450,'coin_team').setInteractive();
        let b = this.add.image(1040,450,'stone_team').setInteractive();
        let c = this.add.image(950,600,'red_x').setInteractive().setScale(.3);
        let d = this.add.image(1150,600,'selection_box').setInteractive();
        let e = this.add.image(950,200,'question_mark_box').setOrigin(0.5).setScale(2);
        

        d.setVisible(false);

        a.on('pointerup', () =>
            {
                if(this.selectedX<0){
                    return;
                }
                this.box[this.selectedX][this.selectedY].setTexture('coin_team');
                e.setTexture('question_mark_box');
                this.selectedX = -1;
                d.setVisible(false);
                this.chinesePrompt.text = '???';
                
            });
        
        b.on('pointerup', () =>
            {
                if(this.selectedX<0){
                    return;
                }
                this.box[this.selectedX][this.selectedY].setTexture('stone_team');
                e.setTexture('question_mark_box');
                this.selectedX = -1;
                d.setVisible(false);
                this.chinesePrompt.text = '???';
            });
       
            c.on('pointerup', () =>
            {
                this.box[this.selectedX][this.selectedY].setTexture(e.texture);
                e.setTexture('question_mark_box');
                this.chinesePrompt.text = '???';
                d.setVisible(false);

            }); 


        for (let x=0;x<5;x++){
            this.box[x] = [];

            for(let y = 0; y<5; y++){
                let z = this.wordList.getQuestion();
                this.box[x][y] = this.add.image(
                    x*(this.squareSize+this.padding)+ this.spaceing,
                    y*(this.squareSize+this.padding)+ this.spaceing,
                    this.wordList.word[z])
                    .setOrigin(0.5).setInteractive();
                this.box[x][y].on('pointerup', () => 
                {
                    let msg = new SpeechSynthesisUtterance();
                    msg.lang = 'zh';
                    msg.text = this.wordList.chinese[z];
                    this.chinesePrompt.setVisible(true);
                    this.chinesePrompt.text = msg.text;
                    this.selectedX = x;
                    this.selectedY = y;
                    e.setTexture(this.wordList.word[z])
                    d.x = this.box[x][y].x;
                    d.y = this.box[x][y].y;
                    d.setVisible(true);
                   
                    window.speechSynthesis.speak(msg);
                    
                })

            }
        }
        this.addHeadings();
      
    }

    update(){

    }


    addHeadings(){
        let bingo = ['B','I','N','G','O'];
        for(let q = 0; q<5;q++){
            this.add.text(
                (this.squareSize+this.padding)*q + this.spaceing,
                0,
                bingo[q],
                {
                    color: '#FFFFFF',
                    fontSize: '48px'
                }
                ).setOrigin(0.5,0);
            this.add.text(
                10,
                (this.squareSize+this.padding)*q + this.spaceing,
                (q+1).toString(),
                {
                    color: '#FFFFFF',
                    fontSize: '48px'
                }
                ).setOrigin(0,0.5);
                

        }
    }
}