import { GameScene } from "./scenes/gameScene.js";
import { MenuScene } from "./scenes/menuScene.js";


const app = new Phaser.Game({
    type: Phaser.CANVAS,
    pixelArt: false,
    scale: {
        parent: 'app-container',
        width: 1200,
        height: 750,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    backgroundColor: '#000000'

});

app.scene.add('menu-scene',MenuScene);
app.scene.add('game-scene',GameScene);

app.scene.start('menu-scene');
