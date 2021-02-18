var canvas;
var music;
var box1, box2, box3, box4, ball;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
   box1 = createSprite(50,580,190,20);
   box1.shapeColor = "Green";
   box2 = createSprite(260,580,190,20);
   box2.shapeColor = "blue";
   box3 = createSprite(470,580,190,20);
   box3.shapeColor = "purple"
   box4 = createSprite(690,580,190,20);
   box4.shapeColor = "pink"

    //create box sprite and give velocity
    ball = createSprite(150,500,50,50);
    ball.shapeColor = "Orange";
    ball.velocityY = 7;
    ball.velocityX = 7;
}

function draw() {
    background(rgb(169,169,169));
    
    //create edgeSprite

    createEdgeSprites();

    ball.bounceOff(edges);

    //add condition to check if box touching surface and make it box

    if(box1.isTouching(ball) && ball.bounceOff(box1)){
        ball.shapeColor = "yellow";
        music.play();
    }

    if(box2.isTouching(ball)){
        ball.shapeColor = "Black";
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }

    if(box3.isTouching(ball) && ball.bounceOff(box3)){
        ball.shapeColor = "red";
    }

    if(box4.isTouching(ball) && ball.bounceOff(box4)){
        ball.shapeColor = "white";
    }

    drawSprites();
}
