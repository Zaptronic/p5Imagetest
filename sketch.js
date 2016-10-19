var img;
var glitch;
var gui;

var sy = [];
var sh = [];
var dx = [];

var randomCopies;
var modulus;
var chance;

var json = '{\
      "preset": "nice",\
      "closed": false,\
      "remembered": {\
        "Default": {\
          "0": {}\
      },\
        "lekker hoog": {\
          "0": {\
              "sourceHeight": 20,\
              "horGlitch": 5,\
              "randomCopyAmount": 2\
          }\
      },\
        "nice": {\
          "0": {\
            "sourceHeight": 252.39627434377644,\
            "horGlitch": -52.71803556308213,\
            "randomCopyAmount": 6.049110922946656\
        }\
    }\
},\
      "folders": {}\
}';

function setup() {
    colorMode(HSB);
    img = loadImage("img/test.jpg");
    glitch = new glitcher();
    gui = new dat.GUI();
    gui = new dat.GUI({load: JSON.parse(json)});
    gui.add(glitch, 'sourceHeight', 1, 600);
    gui.add(glitch, 'horGlitch', -80, 80);
    gui.add(glitch, 'randomCopyAmount', 0, 10);
    gui.add(glitch, 'modulus', 2, 10);
    gui.add(glitch, 'chance', 1, 100);
    // gui.remember(glitch);
}

function draw() {
    createCanvas(windowWidth, windowHeight);
    background(0);

    randomCopies = random(floor(glitch.randomCopyAmount));
    modulus = floor(glitch.modulus);
    chance = glitch.chance;

    if (frameCount % modulus === 0 && random(100) < chance) {
        for (i=0; i< randomCopies; i++) {
            sy[i] = round(randomGaussian(img.height/2, 200));
            sh[i] = glitch.sourceHeight;
            dx[i] = round(randomGaussian(glitch.horGlitch));
            translate(dx[i],0);
            copy(img,0,sy[i],img.width,sh[i],dx[i],sy[i],img.width,sh[i]);
        }
    }
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

// {
//   "preset": "d",
//   "closed": false,
//   "remembered": {
//     "Default": {
//       "0": {}
//     },
//     "lekker hoog": {
//       "0": {
//         "sourceHeight": 20,
//         "horGlitch": 5,
//         "randomCopyAmount": 2
//       }
//     },
//     "nice": {
//       "0": {}
//     },
//     "d": {
//       "0": {
//         "sourceHeight": 150,
//         "horGlitch": 5,
//         "randomCopyAmount": 8.541913632514818,
//         "modulus": 2.6773920406435225,
//         "chance": 83.2514817950889
//       }
//     }
//   },
//   "folders": {}
// }
