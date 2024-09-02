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

        this.load_class_E(this.word.length);
        //this.load_class_D(this.word.length);
        //this.load_lesson_1(this.word.length);
        //this.load_lesson_2(this.word.length);
        //this.load_lesson_3(this.word.length);
        //this.load_lesson_4(this.word.length);
        //this.load_lesson_5(this.word.length);
        //this.resetQuestions();
        
        //hill stop please
       


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
    load_lesson_3(s){
        this.word[0+s] = 'wake_up';            this.chinese[0+s] = '醒来';
        this.word[1+s] = 'shoemaker';          this.chinese[1+s] = '鞋匠，制鞋工人';
        this.word[2+s] = 'sir';                this.chinese[2+s] = '先生';
        this.word[3+s] = 'shook_ones_head';    this.chinese[3+s] = '摇头';
        this.word[4+s] = 'bakery';             this.chinese[4+s] = '面包店';
        this.word[5+s] = 'greet';              this.chinese[5+s] = '迎接，打招呼';
        this.word[6+s] = 'baker';              this.chinese[6+s] = '面包师';
        this.word[7+s] = 'right_now';          this.chinese[7+s] = '马上，立刻';
        this.word[8+s] = 'daughter';           this.chinese[8+s] = '女儿';
        this.word[9+s] = 'luck';               this.chinese[9+s] = '运气';
        this.word[10+s] = 'no_one';            this.chinese[10+s] = '没有人';
        this.word[11+s] = 'bounce';            this.chinese[11+s] = '弹开，反弹';
        this.word[12+s] = 'dirt';              this.chinese[12+s] = '土，灰尘';
        this.word[13+s] = 'shabby';            this.chinese[13+s] = '破烂的，破旧的，寒酸的';
        this.word[14+s] = 'gather';            this.chinese[14+s] = '收集，聚集';
        this.word[15+s] = 'herb';              this.chinese[15+s] = '草本植物';
        this.word[16+s] = 'mean_to';           this.chinese[16+s] = '故意';
        this.word[17+s] = 'shyly';             this.chinese[17+s] = '害羞地，羞怯地';
     
        for(let q = s; q<this.word.length;q++){
            this.scene.load.image(this.word[q], 'assets/lesson3/' + this.word[q] + '.png');
        }
        

    }
    load_lesson_4(s){
        this.word[0+s] = 'explorer';           this.chinese[0+s] = '醒探险家，探查的人来';
        this.word[1+s] = 'treasure';           this.chinese[1+s] = '珍品，珍宝';
        this.word[2+s] = 'trip';               this.chinese[2+s] = '旅行';
        this.word[3+s] = 'lit_up';             this.chinese[3+s] = '发光';
        this.word[4+s] = 'mean';               this.chinese[4+s] = '坏心的，卑鄙的';
        this.word[5+s] = 'parent';             this.chinese[5+s] = '父母';
        this.word[6+s] = 'several';            this.chinese[6+s] = '几个的，数个的';
        this.word[7+s] = 'take_care_of';       this.chinese[7+s] = '照顾';
        this.word[8+s] = 'sound';              this.chinese[8+s] = '听起来，声音';
        this.word[9+s] = 'hard';               this.chinese[9+s] = '困难的，硬的，努力地';
        this.word[10+s] = 'frown';             this.chinese[10+s] = '皱眉';
        this.word[11+s] = 'sell';              this.chinese[11+s] = '卖，销售';
        this.word[12+s] = 'gasp';              this.chinese[12+s] = '倒抽一口气';
        this.word[13+s] = 'firmly';            this.chinese[13+s] = '坚定地，坚决地';
        this.word[14+s] = 'fold_ones_arms';    this.chinese[14+s] = '双臂交叉';
        this.word[15+s] = 'hang_ones_head';    this.chinese[15+s] = '垂下头';
     
        for(let q = s; q<this.word.length;q++){
            this.scene.load.image(this.word[q], 'assets/lesson4/' + this.word[q] + '.png');
        }
    
    }


    load_lesson_5(s){
        this.word[0+s] = 'funny_looking';      this.chinese[0+s] = '长得很有趣的';
        this.word[1+s] = 'walk';               this.chinese[1+s] = '使(马，狗等)慢步走';
        this.word[2+s] = 'toward';             this.chinese[2+s] = '朝，向';
        this.word[3+s] = 'rang_out';           this.chinese[3+s] = '大声发出';
        this.word[4+s] = 'wave_at';            this.chinese[4+s] = '朝…挥手';
        this.word[5+s] = 'like';               this.chinese[5+s] = '像，如同，喜欢';
        this.word[6+s] = 'strange';            this.chinese[6+s] = '奇怪的， 陌生的';
        this.word[7+s] = 'fine';               this.chinese[7+s] = '好的，可以接受的';
        this.word[8+s] = 'lucky';              this.chinese[8+s] = '赚幸运的，运气好的得';
        this.word[9+s] = 'another';            this.chinese[9+s] = '另一个';
        this.word[10+s] = 'held_out';          this.chinese[10+s] = '伸出(手等)';
        this.word[11+s] = 'blinked';           this.chinese[11+s] = '眨眼睛';
        this.word[12+s] = 'lay';               this.chinese[12+s] = '帮助';
        this.word[13+s] = 'bean';              this.chinese[13+s] = '豆子';
        this.word[14+s] = 'special';           this.chinese[14+s] = '特别的';
        this.word[15+s] = 'look_like';         this.chinese[15+s] = '看起来像';
        this.word[16+s] = 'plain';             this.chinese[16+s] = '平凡的，普通的';
        this.word[17+s] = 'deal';              this.chinese[17+s] = '交易，协议';
        this.word[18+s] = 'make_a_deal';       this.chinese[18+s] = '做交易，协商';
     
        for(let q = s; q<this.word.length;q++){
            this.scene.load.image(this.word[q], 'assets/lesson5/' + this.word[q] + '.png');
        }
    }

    load_class_D(s){
        this.word[0+s] = 'bike';            this.chinese[0+s] = '自行车';
        this.word[1+s] = 'clap';            this.chinese[1+s] = '拍手';
        this.word[2+s] = 'clip';            this.chinese[2+s] = '夹子';
        this.word[3+s] = 'cone';            this.chinese[3+s] = '三角锥';
        this.word[4+s] = 'cut';             this.chinese[4+s] = '';
        this.word[5+s] = 'dress';           this.chinese[5+s] = '裙子';
        this.word[6+s] = 'drum';            this.chinese[6+s] = '鼓';
        this.word[7+s] = 'frame';           this.chinese[7+s] = '架子';
        this.word[8+s] = 'face';            this.chinese[8+s] = '脸';
        this.word[9+s] = 'frog';            this.chinese[9+s] = '青蛙';
        this.word[10+s] = 'glass';          this.chinese[10+s] = '玻璃杯';
        this.word[11+s] = 'grab';           this.chinese[11+s] = '';
        this.word[12+s] = 'grass';          this.chinese[12+s] = '草';
        this.word[13+s] = 'hide';           this.chinese[13+s] = '';
        this.word[14+s] = 'hive';           this.chinese[14+s] = '蜂箱';
        this.word[15+s] = 'hole';           this.chinese[15+s] = '洞';
        this.word[16+s] = 'kite';           this.chinese[16+s] = '强壮的';
        this.word[17+s] = 'lace';           this.chinese[17+s] = '蕾丝边';
        this.word[18+s] = 'lake';           this.chinese[18+s] = '湖';
        this.word[19+s] = 'maze';           this.chinese[19+s] = '迷宫';
        this.word[20+s] = 'mole';           this.chinese[20+s] = '鼹鼠';
        this.word[21+s] = 'mule';           this.chinese[21+s] = '骡子';
        this.word[22+s] = 'nose';           this.chinese[22+s] = '鼻子';
        this.word[23+s] = 'pine';           this.chinese[23+s] = '松树';
        this.word[24+s] = 'hope';           this.chinese[24+s] = '跑步';
        this.word[25+s] = 'plane';          this.chinese[25+s] = '飞机';
        this.word[26+s] = 'plate';          this.chinese[26+s] = '盘子';
        this.word[27+s] = 'plug';           this.chinese[27+s] = '插头';
        this.word[28+s] = 'pose';           this.chinese[28+s] = '姿势';
        this.word[29+s] = 'rose';           this.chinese[29+s] = '玫瑰';
        this.word[30+s] = 'rope';           this.chinese[30+s] = '绳子';
        this.word[31+s] = 'race';           this.chinese[31+s] = '竞赛';
        this.word[32+s] = 'sad';            this.chinese[32+s] = '难过';
        this.word[33+s] = 'tub';            this.chinese[33+s] = '浴缸';
        this.word[34+s] = 'tube';           this.chinese[34+s] = '管子';
        this.word[35+s] = 'tune';           this.chinese[35+s] = '曲调';
        this.word[36+s] = 'vine';           this.chinese[36+s] = '藤蔓';

        for(let q = s; q<this.word.length;q++){
            this.scene.load.image(this.word[q], 'assets/classD/' + this.word[q] + '.png');
        }
    }


    load_class_E(s){
        this.word[0+s] = 'arm';                     this.chinese[0+s] = '胳膊';
        this.word[1+s] = 'big_bigger_biggest';      this.chinese[1+s] = '大，更大，最大';
        this.word[2+s] = 'body';                    this.chinese[2+s] = '身体';
        this.word[3+s] = 'eyes';                    this.chinese[3+s] = '眼睛';
        this.word[4+s] = 'fast_faster_fastest';     this.chinese[4+s] = '快，更快，最快';
        this.word[5+s] = 'heavy';                   this.chinese[5+s] = '重的';
        this.word[6+s] = 'hill';                    this.chinese[6+s] = '小山坡';
        this.word[7+s] = 'hold';                    this.chinese[7+s] = '握住，拿住';
        this.word[8+s] = 'jump';                    this.chinese[8+s] = '跳';
        this.word[9+s] = 'mouth';                   this.chinese[9+s] = '嘴巴';
        this.word[10+s] = 'nose';                   this.chinese[10+s] = '鼻子';
        this.word[11+s] = 'please';                 this.chinese[11+s] = '请';
        this.word[12+s] = 'snow';                   this.chinese[12+s] = '雪';
        this.word[13+s] = 'snowball';               this.chinese[13+s] = '雪球';
        this.word[14+s] = 'snowman';                this.chinese[14+s] = '雪人';
        this.word[15+s] = 'stop';                   this.chinese[15+s] = '停止';
        this.word[16+s] = 'strong';                 this.chinese[16+s] = '强壮的';
        this.word[17+s] = 'talk';                   this.chinese[17+s] = '说，说话';
        this.word[18+s] = 'tall_taller_tallest';    this.chinese[18+s] = '高，更高，最高';
        this.word[19+s] = 'climb';                  this.chinese[19+s] = '爬';
        this.word[20+s] = 'swim';                   this.chinese[20+s] = '游泳';
        this.word[21+s] = 'eat';                    this.chinese[21+s] = '吃';
        this.word[22+s] = 'under';                  this.chinese[22+s] = '在...下面';
        this.word[23+s] = 'drink';                  this.chinese[23+s] = '喝';
        this.word[24+s] = 'run';                    this.chinese[24+s] = '跑步';
        for(let q = s; q<this.word.length;q++){
            this.scene.load.image(this.word[q], 'assets/classE/' + this.word[q] + '.png');
        }
    }
}