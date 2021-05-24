var ball;
var database,position;

function setup(){
    createCanvas(500,500);
    var database = firebase.database();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    
var Carloc = database.ref("Ball/Position");
Carloc.on('value',readOp,showError);
}

function draw(){
    background("white");

    if(position !== undefined){
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
}
    drawSprites();

}

function writePosition(x,y){
    database.ref("Ball/Position").set({
     'x' : ball.x + x,
   'y' : ball.y + y
    })
}

function readOp(data){
position = data.val();
ball.x = position.x;
ball.y = position.y;

}

function showError(){
    console.log('error');

}
