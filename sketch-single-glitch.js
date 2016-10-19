var img;
var gui;
var sy;
var sh;
var glitch;
var gui;

var json = '{\
      "preset": "lekker hoog",\
      "closed": false,\
      "remembered": {\
        "Default": {\
          "0": {}\
      },\
        "lekker hoog": {\
          "0": {\
            "sourceHeight": 400,\
            "horglitch": 30\
        }\
    }\
},\
      "folders": {}\
}';

function setup() {
    colorMode(HSB);
    img = loadImage("img/test.jpg");
    glitch = new glitcher();
    gui = new dat.GUI({load: JSON.parse(json)});
    gui.add(glitch, 'sourceHeight', 0, 600);
    gui.add(glitch, 'horGlitch', -40, 40);
    gui.remember(glitch);
}

function draw() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    frameRate(10);

    // image(img, 0, 0, img.width, img.height);
    sy = round(randomGaussian(img.height/2, 200));
    sh = glitch.sourceHeight;
    var dx = floor(glitch.horGlitch);
    translate(dx,0);
    copy(img,0,sy,img.width,sh,0,sy,img.width,sh);
}
