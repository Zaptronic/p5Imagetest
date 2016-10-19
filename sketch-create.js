var img;
var H;
var inc = 0;

function setup() {
    colorMode(HSB);
    img = new p5.Image(windowWidth,400,this);
    console.log(img);
}

function draw() {
    createCanvas(windowWidth, windowHeight);
    // background(0);
    img.loadPixels();
    for(x=0; x < img.width; x++) {
        for (y=0; y < img.height; y++) {
            var a = map(y, 0, img.height, 255, 0);
            H = sin(inc) * x;
            img.set(x, y, [H, 16, 204, 500]);
        }
    }
    img.updatePixels();
    image(img, 0, 100);

    inc += 0.05;
}
