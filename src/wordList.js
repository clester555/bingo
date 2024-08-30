export class WordList {
    
    numOfLessons = 13;
    numOfWords = 0;
    word = [];
    chinese = [];
    used = [];
    scene = null;
    test = [];

    constructor(scene){
        this.scene = scene;
        this.load_lesson_1(0);
        this.load_lesson_2(this.word.length);
   
        this.resetQuestions();
        

       


    }

    getQuestion(){
        let x = 0;
        do{
            x=Phaser.Math.RND.between(0,this.word.length-1);
        } while (this.used[x] == true)
        this.used[x] = true; 
        return x;
    }

    resetQuestions(){
        for(let q = 0; q<this.word.length;q++){
            this.used[q] = false;
        }
    
    }


    load_lesson_1(s){
        this.word[0+s] = 'no_more';            this.chinese[0+s] = '不再';
        this.word[1+s] = 'once_upon_a_time';   this.chinese[1+s] = '从前';
        this.word[2+s] = 'clever';             this.chinese[2+s] = '聪明的，机灵的';
        this.word[3+s] = 'poor';               this.chinese[3+s] = '贫穷的，可怜的';
        this.word[4+s] = 'long_ago';           this.chinese[4+s] = '很久以前';
        this.word[5+s] = 'evil';               this.chinese[5+s] = '邪恶的，坏的';
        this.word[6+s] = 'ogre';               this.chinese[6+s] = '魔鬼';
        this.word[7+s] = 'stole';              this.chinese[7+s] = '偷窃';
        this.word[8+s] = 'still';              this.chinese[8+s] = '还，仍然';
        this.word[9+s] = 'garden';             this.chinese[9+s] = '花园';
        this.word[10+s] = 'wheat';             this.chinese[10+s] = '小麦';
        this.word[11+s] = 'field';             this.chinese[11+s] = '原野，田地';
        this.word[12+s] = 'cow';               this.chinese[12+s] = '母牛';
        this.word[13+s] = 'named';             this.chinese[13+s] = '名字叫...，被称为...';
        this.word[14+s] = 'milk';              this.chinese[14+s] = '挤奶，牛奶';
        this.word[15+s] = 'market';            this.chinese[15+s] = '(买卖东西的)市场';
        this.word[16+s] = 'fresh';             this.chinese[16+s] = '新鲜的，新的';
        this.word[17+s] = 'sale';              this.chinese[17+s] = '贩卖，出售';
        this.word[18+s] = 'for_sale';          this.chinese[18+s] = '待售';
        this.word[19+s] = 'terrible';          this.chinese[19+s] = '可怕的，糟糕的)';
        this.word[20+s] = 'rainstorm';         this.chinese[20+s] = '暴风雨';
        this.word[21+s] = 'wash_away';         this.chinese[21+s] = '冲走';
        this.word[22+s] = 'cheerfully';        this.chinese[22+s] = '高兴地，欢快地';
        this.word[23+s] = 'plant';             this.chinese[23+s] = '种植';
        for(let q = s; q<this.word.length;q++){
            this.scene.load.image(this.word[q], 'assets/lesson1/' + this.word[q] + '.png');
        }
        

    }

    load_lesson_2(s){
        this.word[0+s] = 'grand';              this.chinese[0+s] = '宏伟的';
        this.word[1+s] = 'make_money';         this.chinese[1+s] = '赚钱';
        this.word[2+s] = 'sob';                this.chinese[2+s] = '呜咽，啜泣';
        this.word[3+s] = 'hate';               this.chinese[3+s] = '讨厌，仇恨';
        this.word[4+s] = 'lift';               this.chinese[4+s] = '举起';
        this.word[5+s] = 'simple';             this.chinese[5+s] = '简单的';
        this.word[6+s] = 'look_for';           this.chinese[6+s] = '寻找';
        this.word[7+s] = 'job';                this.chinese[7+s] = '工作，职业';
        this.word[8+s] = 'earn';               this.chinese[8+s] = '赚得';
        this.word[9+s] = 'remember';           this.chinese[9+s] = '记得';
        this.word[10+s] = 'nobody';            this.chinese[10+s] = '没有人';
        this.word[11+s] = 'need';              this.chinese[11+s] = '需要';
        this.word[12+s] = 'help';              this.chinese[12+s] = '帮助';
        this.word[13+s] = 'hurt';              this.chinese[13+s] = '使…受伤，使…疼痛';
        this.word[14+s] = 'try';               this.chinese[14+s] = '尝试';
        this.word[15+s] = 'twinkle';           this.chinese[15+s] = '闪耀，闪烁';
        this.word[16+s] = 'brightly';          this.chinese[16+s] = '明亮地，闪亮地';
        this.word[17+s] = 'hope';              this.chinese[17+s] = '希望';
        this.word[18+s] = 'fill';              this.chinese[18+s] = '装满，填满';
        this.word[19+s] = 'magical';           this.chinese[19+s] = '魔术的，魔法的)';
        this.word[20+s] = 'happen';            this.chinese[20+s] = '(事件，事情等)发生';
        for(let q = s; q<this.word.length;q++){
            this.scene.load.image(this.word[q], 'assets/lesson2/' + this.word[q] + '.png');
        }
    }

}