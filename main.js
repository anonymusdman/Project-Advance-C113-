function preload(){}

function setup(){
    canvas = createCanvas(640, 500);
    canvas.position(110, 225);
    camerafeed = createCapture(VIDEO);
    camerafeed.hide();
}

function draw(){
    image(camerafeed, 0, 50, 400, 300);

    fill(35, 145, 245);
  stroke(35, 145, 245);
  square(0, 340, 60, 10);
  square(340, 340, 60, 10);
  
  square(340, 60, 60, 10);
  square(0, 60, 60, 10);
}

function take_snapshot(){
    save("Something.jpeg");
}