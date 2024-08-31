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
    grid = [];
    explode = [];
    exploding = false;
    timer = 0;
    winner = 'none';
    coin_sound = null;
    stone_sound = null;

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
        this.load.audio('explosionAudio','assets/sounds/explode.mp3');
        this.load.audio('stone_sound','assets/sounds/stone2.mp3');
        this.load.audio('coin_sound','assets/sounds/coin1.mp3');
        this.load.audio('applause_sound','assets/sounds/applause1.mp3');
        
        this.load.atlas('flares', 'assets/particles/flares.png', 'assets/particles/flares.json');
        this.load.image('winning_picture','assets/winning_picture.png');
      
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
                this.grid[this.selectedX][this.selectedY] = 'coin';
                this.coin_sound.play();
                e.setTexture('question_mark_box');
                this.selectedX = -1;
                d.setVisible(false);
                this.chinesePrompt.text = '???';
                this.checkForWinner();
            });
        
        b.on('pointerup', () =>
            {
                if(this.selectedX<0){
                    return;
                }
                this.box[this.selectedX][this.selectedY].setTexture('stone_team');
                this.grid[this.selectedX][this.selectedY] = 'stone';
                this.stone_sound.play();
                e.setTexture('question_mark_box');
                this.selectedX = -1;
                d.setVisible(false);
                this.chinesePrompt.text = '???';
                this.checkForWinner();
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
            this.grid[x] = [];
            this.explode[x] = [];
            for(let y = 0; y<5; y++){
                let z = this.wordList.getQuestion();
                this.grid[x][y] = 'none';
                this.explode[x][y] = false;
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
                    msg.rate = 0.5;
                    window.speechSynthesis.speak(msg);
                    
                })

            }
        }
        this.addHeadings();
        this.explosionAudio = this.sound.add('explosionAudio',{volume:0.3});
        this.coin_sound = this.sound.add('coin_sound',{volume:0.2});
        this.stone_sound = this.sound.add('stone_sound',{volume:1.0});
        this.applause_sound = this.sound.add('applause_sound',{volume:1.0});

        this.emitter = this.add.particles(400, 250, 'flares', {
            frame: [ 'red', 'yellow', 'green' ],
            lifespan: 4000,
            speed: { min: 250, max: 450 },
            scale: { start: 0.8, end: 0 },
            gravityY: 150,
            blendMode: 'ADD',
            emitting: false
        });
      
    }

    update(t,dt){
        if(this.exploding){
            this.timer+=dt;
            if(this.timer>500){
                this.timer = 0;
                this.explodeOne();
            }
        }
    }


    checkForWinner(){
        let winner = 'none';
        //check rows
        for( let q = 0; q<5;q++){
            if(this.grid[q][0] != 'none'){
                if(this.isEqual(this.grid[q][0],this.grid[q][1],this.grid[q][2],this.grid[q][3],this.grid[q][4])){
                    this.explode[q][0] = true; this.explode[q][1] = true; this.explode[q][2] = true; this.explode[q][3] = true; this.explode[q][4] = true;
                    winner = this.grid[q][0];
                }
            }
        }
        //check columns
        for( let q = 0; q<5;q++){
            if(this.grid[0][q] != 'none'){
                if(this.isEqual(this.grid[0][q],this.grid[1][q],this.grid[2][q],this.grid[3][q],this.grid[4][q])){
                    this.explode[0][q] = true; this.explode[1][q] = true; this.explode[2][q] = true; this.explode[3][q] = true; this.explode[4][q] = true;
                    winner = this.grid[0][q];
                }
            }
        }
        //check diagonals
        if(this.grid[2][2] != 'none'){
            if(this.isEqual(this.grid[0][0],this.grid[1][1],this.grid[2][2],this.grid[3][3],this.grid[4][4])){
                this.explode[0][0] = true; this.explode[1][1] = true; this.explode[2][2] = true; this.explode[3][3] = true; this.explode[4][4] = true;
                winner = this.grid[0][0];
            }
            if(this.isEqual(this.grid[4][0],this.grid[3][1],this.grid[2][2],this.grid[1][3],this.grid[0][4])){
                this.explode[4][0] = true; this.explode[3][1] = true; this.explode[2][2] = true; this.explode[1][3] = true; this.explode[0][4] = true;
                winner = this.grid[2][2];
            }
        }
        if(winner != 'none'){
            if(winner == 'coin'){
                this.winner = 'Coin';
            }else{
                this.winner = 'Stone';
            }
            this.exploding = true;
        }
        
       

    }

    explodeOne(){
        for(let x = 0;x<5;x++){
            for(let y = 0;y<5;y++){
                if(this.explode[x][y] == true){
                    this.emitter.x=this.box[x][y].x;
                    this.emitter.y=this.box[x][y].y;
                    this.box[x][y].setVisible(false);
                    this.emitter.explode(20);
                    this.explosionAudio.play();
                    this.explode[x][y] = false;
                    return;
                }
            }
        }
        this.exploding = false;
        for(let x = 0;x<5;x++){
            for(let y = 0;y<5;y++){
                this.box[x][y].setVisible(false);
            }
        }
        this.applause_sound.play();
        this.add.image(384,384,'winning_picture').setScale(1.5);
        this.add.text(
            384,
            300,
            this.winner,
            {
                color: '#000000',
                fontSize: '32px'
            }
            ).setOrigin(0.5);
            this.add.text(
                384,
                330,
                'Team',
                {
                    color: '#000000',
                    fontSize: '32px'
                }
                ).setOrigin(0.5);

    }

    isEqual(a,b,c,d,e){
        if(a==b && a==c && a==d && a==e){
            return true;
        }
        return false;
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