img = "";

function preload(){
img = loadImage("dog_cat.jpg");
}

function draw(){
image(img , 0 , 0 , 650 , 600);
fill("#f70b02");
text("dog" , 45 , 75);
noFill();
stroke("#f70b02");
rect(30 , 60 , 350 , 450);
}

function setup(){
canvas = createCanvas(650 , 600);
canvas.center();
}