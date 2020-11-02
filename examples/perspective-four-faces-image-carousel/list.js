import PerspectiveImagePlugin from '../../plugins/perspectiveimage-plugin.js';

class Demo extends Phaser.Scene {
    constructor() {
        super({
            key: 'examples'
        })
    }

    preload() {
        this.load.atlas('poker', 'assets/images/poker2/poker.png', 'assets/images/poker2/poker.json');
    }

    create() {
        var images = [];
        for (var i = 0; i < 13; i++) {
            images.push({
                key: 'poker',
                frame: GetCardFrameName(i)
            })
        }

        var carousel = this.add.rexPerspectiveFourFacesImageCarousel({
            x: 400, y: 300,

            images: images
        })

        var faces = carousel.faces;
        for (var i = 0, cnt = faces.length; i < cnt; i++) {
            console.log(faces[i].frame.name);
        }

        // this.input.on('pointermove', function (pointer) {
        // 
        //     if (!pointer.isDown) {
        //         return;
        //     }
        // 
        //     carousel.rotationY += pointer.velocity.x * (1 / 800);
        // });

        carousel
            .setInteractive()
            .on('pointerdown', function (pointer, localX, localY, event) {
                if (localX <= (carousel.width / 2)) {
                    carousel.toPrevious();
                } else {
                    carousel.toNext();
                }
            });
    }

    update() {
    }
}


const RandInt = Phaser.Math.Between;
const Pad = Phaser.Utils.String.Pad;
var GetCardFrameName = function (index) {
    if (index === undefined) {
        index = RandInt(0, 51);
    }
    return Pad(index.toString(), 3, '0', 1);
}

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: Demo,
    backgroundColor: 0x33333,
    plugins: {
        global: [{
            key: 'rexPerspectiveImage',
            plugin: PerspectiveImagePlugin,
            start: true
        }]
    }
};

var game = new Phaser.Game(config);