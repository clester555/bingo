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
        this.word[16+s] = 'brightly';          this.chinese[16+s] = '明亮，闪亮';
        this.word[17+s] = 'hope';              this.chinese[17+s] = '希望';
        this.word[18+s] = 'fill';              this.chinese[18+s] = '装满，填满';
        this.word[19+s] = 'magical';           this.chinese[19+s] = '魔术的，魔法的';
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


    load_lesson_10(s){
        this.word[0+s] = 'baked';               this.chinese[0+s] = '烤的，烘焙的';
        this.word[1+s] = 'bread';               this.chinese[1+s] = '面包';
        this.word[2+s] = 'cross_ones_heart';    this.chinese[2+s] = '在胸口划十字，发誓';
        this.word[3+s] = 'die_from';            this.chinese[3+s] = '死于';
        this.word[4+s] = 'favorite';            this.chinese[4+s] = '最喜欢的';
        this.word[5+s] = 'get_out_of';          this.chinese[5+s] = '离开';
        this.word[6+s] = 'growl';               this.chinese[6+s] = '咕咕叫，低沉而大声地说话';
        this.word[7+s] = 'hunger';              this.chinese[7+s] = '饥饿';
        this.word[8+s] = 'hunting';             this.chinese[8+s] = '狩猎，打猎';
        this.word[9+s] = 'knee';                this.chinese[9+s] = '膝盖';
        this.word[10+s] = 'let_out';            this.chinese[10+s] = '发出';
        this.word[11+s] = 'loud';               this.chinese[11+s] = '大声的';
        this.word[12+s] = 'promise';            this.chinese[12+s] = '许诺，保证';
        this.word[13+s] = 'right_now';          this.chinese[13+s] = '名字叫...，被称为...';
        this.word[14+s] = 'should';             this.chinese[14+s] = '应该';
        this.word[15+s] = 'sigh';               this.chinese[15+s] = '叹气，叹息';
        this.word[16+s] = 'steal';              this.chinese[16+s] = '偷窃';
        this.word[17+s] = 'treasure';           this.chinese[17+s] = '珍品，珍宝';
        this.word[18+s] = 'weak';               this.chinese[18+s] = '虚弱的，无力的';
        this.word[19+s] = 'went_on';            this.chinese[19+s] = '继续下去)';
        this.word[20+s] = 'wife';               this.chinese[20+s] = '妻子，夫人';
        this.word[21+s] = 'worse';              this.chinese[21+s] = '更坏的';
        this.word[22+s] = 'at_once';            this.chinese[22+s] = '马上';
     
        for(let q = s; q<this.word.length;q++){
            this.scene.load.image(this.word[q], 'assets/lesson10/' + this.word[q] + '.png');
        }
    }

    load_lesson_11(s){
        this.word[0+s] = 'footstep';            this.chinese[0+s] = '走路的声音';
        this.word[1+s] = 'get_to_ones_feet';    this.chinese[1+s] = '站起来';
        this.word[2+s] = 'gulp_down';           this.chinese[2+s] = '一口吞下';
        this.word[3+s] = 'nasty';               this.chinese[3+s] = '恶意的';
        this.word[4+s] = 'oven';                this.chinese[4+s] = '烤箱';
        this.word[5+s] = 'porridge';            this.chinese[5+s] = '粥，麦片粥';
        this.word[6+s] = 'sharp';               this.chinese[6+s] = '锋利的，尖的';
        this.word[7+s] = 'sniff';               this.chinese[7+s] = '吸气的声音';
        this.word[8+s] = 'thump';               this.chinese[8+s] = '重击声，砰然声';
        this.word[9+s] = 'toss';                this.chinese[9+s] = '扔，抛，投';
        this.word[10+s] = 'crack';              this.chinese[10+s] = '裂缝';
        for(let q = s; q<this.word.length;q++){
            this.scene.load.image(this.word[q], 'assets/lesson11/' + this.word[q] + '.png');
        }
    }

    load_lesson_12(s){
        this.word[0+s] = 'alive';           this.chinese[0+s] = '活着的，现存的';
        this.word[1+s] = 'aweful';          this.chinese[1+s] = '可怕的，糟糕的';
        this.word[2+s] = 'blueberry';       this.chinese[2+s] = '蓝莓';
        this.word[3+s] = 'corner';          this.chinese[3+s] = '边角，棱角';
        this.word[4+s] = 'dead';            this.chinese[4+s] = '死亡的';
        this.word[5+s] = 'dear';            this.chinese[5+s] = '亲爱的';
        this.word[6+s] = 'fear';            this.chinese[6+s] = '害怕，恐惧';
        this.word[7+s] = 'melt_away';       this.chinese[7+s] = '慢慢溶化';
        this.word[8+s] = 'pancake';         this.chinese[8+s] = '薄煎饼，薄烤饼';
        this.word[9+s] = 'pat';             this.chinese[9+s] = '轻拍，抚拍';
        this.word[10+s] = 'slice';          this.chinese[10+s] = '薄片，切片';
        this.word[11+s] = 'stomp';          this.chinese[11+s] = '重踩，重踏';
        this.word[12+s] = 'sweetly';        this.chinese[12+s] = '温柔，亲切';
        this.word[13+s] = 'wash_up';        this.chinese[13+s] = '洗(手或脸)'
        this.word[14+s] = 'yell';           this.chinese[14+s] = '叫喊、吼叫';
        this.word[15+s] = 'dream';          this.chinese[15+s] = '做梦';
     
        for(let q = s; q<this.word.length;q++){
            this.scene.load.image(this.word[q], 'assets/lesson12/' + this.word[q] + '.png');
        }
    }

    load_class_A(s){
        this.word[0+s] = 'terrible';          this.chinese[0+s] = '可怕的，糟糕的)';
        this.word[1+s] = 'rainstorm';         this.chinese[1+s] = '暴风雨';
        this.word[2+s] = 'wash_away';         this.chinese[2+s] = '冲走';
        this.word[3+s] = 'cheerfully';        this.chinese[3+s] = '高兴地，欢快地';
        this.word[4+s] = 'evil';               this.chinese[4+s] = '邪恶的，坏的';
        this.word[5+s] = 'clever';             this.chinese[5+s] = '聪明的，机灵的';
        for(let q = s; q<this.word.length;q++){
            this.scene.load.image(this.word[q], 'assets/lesson1/' + this.word[q] + '.png');
        }

        this.word[6+s] = 'grand';              this.chinese[6+s] = '宏伟的';
        this.word[7+s] = 'make_money';         this.chinese[7+s] = '赚钱';
        this.word[8+s] = 'magical';           this.chinese[8+s] = '魔术的，魔法的)';
        this.word[9+s] = 'twinkle';           this.chinese[9+s] = '闪耀，闪烁';
        this.word[10+s] = 'nobody';            this.chinese[10+s] = '没有人';

        for(let q = s + 6; q<this.word.length;q++){
            this.scene.load.image(this.word[q], 'assets/lesson2/' + this.word[q] + '.png');
        }

        this.word[11+s] = 'baker';              this.chinese[11+s] = '面包师';
        this.word[12+s] = 'shoemaker';          this.chinese[12+s] = '鞋匠，制鞋工人';
        this.word[13+s] = 'shabby';            this.chinese[13+s] = '破烂的，破旧的，寒酸的';
        this.word[14+s] = 'mean_to';           this.chinese[14+s] = '故意';
        this.word[15+s] = 'luck';               this.chinese[15+s] = '运气';

        for(let q = s + 11; q<this.word.length;q++){
            this.scene.load.image(this.word[q], 'assets/lesson3/' + this.word[q] + '.png');
        }

        this.word[16+s] = 'several';            this.chinese[16+s] = '几个的，数个的';
        this.word[17+s] = 'take_care_of';       this.chinese[17+s] = '照顾';
        this.word[18+s] = 'sound';              this.chinese[18+s] = '听起来，声音';
        this.word[19+s] = 'gasp';              this.chinese[19+s] = '倒抽一口气';
        this.word[20+s] = 'firmly';            this.chinese[20+s] = '坚定地，坚决地';
        this.word[21+s] = 'fold_ones_arms';    this.chinese[21+s] = '双臂交叉';
        this.word[22+s] = 'hang_ones_head';    this.chinese[22+s] = '垂下头';
        this.word[23+s] = 'explorer';           this.chinese[23+s] = '醒探险家，探查的人来';
        this.word[24+s] = 'treasure';           this.chinese[24+s] = '珍品，珍宝';

        for(let q = s + 16; q<this.word.length;q++){
            this.scene.load.image(this.word[q], 'assets/lesson4/' + this.word[q] + '.png');
        }

        this.word[25+s] = 'funny_looking';      this.chinese[25+s] = '长得很有趣的';
        this.word[26+s] = 'bean';              this.chinese[26+s] = '豆子';
        this.word[27+s] = 'special';           this.chinese[27+s] = '特别的';
        this.word[28+s] = 'look_like';         this.chinese[28+s] = '看起来像';
        this.word[29+s] = 'plain';             this.chinese[29+s] = '平凡的，普通的';
        this.word[30+s] = 'deal';              this.chinese[30+s] = '交易，协议';

        for(let q = s + 25; q<this.word.length;q++){
            this.scene.load.image(this.word[q], 'assets/lesson5/' + this.word[q] + '.png');
        }
    }


    load_class_D(s){
        this.word[0+s] = 'bike';            this.chinese[0+s] = '自行车';
        this.word[1+s] = 'clap';            this.chinese[1+s] = '拍手';
        this.word[2+s] = 'clip';            this.chinese[2+s] = '夹子';
        this.word[3+s] = 'cone';            this.chinese[3+s] = '三角锥';
        this.word[4+s] = 'cut';             this.chinese[4+s] = '剪';
        this.word[5+s] = 'dress';           this.chinese[5+s] = '裙子';
        this.word[6+s] = 'drum';            this.chinese[6+s] = '鼓';
        this.word[7+s] = 'frame';           this.chinese[7+s] = '架子';
        this.word[8+s] = 'face';            this.chinese[8+s] = '脸';
        this.word[9+s] = 'frog';            this.chinese[9+s] = '青蛙';
        this.word[10+s] = 'glass';          this.chinese[10+s] = '玻璃杯';
        this.word[11+s] = 'grab';           this.chinese[11+s] = '抓住';
        this.word[12+s] = 'grass';          this.chinese[12+s] = '草';
        this.word[13+s] = 'hide';           this.chinese[13+s] = '躲藏';
        this.word[14+s] = 'hive';           this.chinese[14+s] = '蜂箱';
        this.word[15+s] = 'hole';           this.chinese[15+s] = '洞';
        this.word[16+s] = 'kite';           this.chinese[16+s] = '风筝';
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
        console.log('dddd');
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