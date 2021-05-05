
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var gamestate = "play"
var bg
function preload() {
    getTime();
}

function setup() {
    //getTime();
    createCanvas(1200, 500);


    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.

    bar1 = new Bar(500, 450, 425, 20)
    bar2 = new Bar(900, 250, 300, 20)

    box1 = new Box(500, 450 - 65, 50, 65)
    box2 = new Box(450, 450 - 65, 50, 65)
    box3 = new Box(400, 450 - 65, 50, 65)
    box4 = new Box(350, 450 - 65, 50, 65)
    box5 = new Box(550, 450 - 65, 50, 65)
    box6 = new Box(600, 450 - 65, 50, 65)
    box7 = new Box(650, 450 - 65, 50, 65)
    box8 = new Box(500, 450 - 65 - 65, 50, 65)
    box9 = new Box(450, 450 - 65 - 65, 50, 65)
    box10 = new Box(400, 450 - 65 - 65, 50, 65)
    box11 = new Box(550, 450 - 65 - 65, 50, 65)
    box12 = new Box(600, 450 - 65 - 65, 50, 65)
    box13 = new Box(500, 450 - 65 - 65 - 65, 50, 65)
    box14 = new Box(450, 450 - 65 - 65 - 65, 50, 65)
    box15 = new Box(550, 450 - 65 - 65 - 65, 50, 65)
    box16 = new Box(500, 450 - 65 - 65 - 65 - 65, 50, 65)
    box17 = new Box(900, 250 - 65, 50, 65)
    box18 = new Box(850, 250 - 65, 50, 65)
    box19 = new Box(800, 250 - 65, 50, 65)
    box20 = new Box(950, 250 - 65, 50, 65)
    box21 = new Box(1000, 250 - 65, 50, 65)
    box22 = new Box(900, 250 - 65 - 65, 50, 65)
    box23 = new Box(850, 250 - 65 - 65, 50, 65)
    box24 = new Box(950, 250 - 65 - 65, 50, 65)
    box25 = new Box(900, 250 - 65 - 65 - 65, 50, 65)
    ball1 = new Ball(200, 270, 20)
    sling1 = new SlingShot(ball1.body, { x: 200, y: 270 })



    Engine.run(engine);

}
function mouseDragged() {
    if (gamestate === "play") {
        Matter.Body.setPosition(ball1.body, { x: mouseX, y: mouseY });
    }
}


function mouseReleased() {
    sling1.fly();
    gamestate = "still_playing"
}

function keyPressed() {
    if (keyCode > 0 && keyCode < 127) {
        Matter.Body.setPosition(ball1.body, { x: 200, y: 270 })
        //ball1.body.speed = 0   
        sling1.attach(ball1.body);
        gamestate = "play"
    }
}

function draw() {
    //getTime();
    rectMode(CENTER);
    if (bg) {
        background(bg);
    } else {
        background(0);
    }
    //getTime();
    fill('#DC143C')
    bar1.display();
    bar2.display();
    fill("#2FF3E0")//blue
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    fill("#F51720")//red
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    fill("#FA26A0")//pink
    box13.display();
    box14.display();
    box15.display();
    fill("#F8D210")//yellow
    box16.display();
    fill("#F51720")//red
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    fill("#FA26A0")//pink
    box22.display();
    box23.display();
    box24.display();
    fill("#2FF3E0")//blue
    box25.display();
    ball1.display();
    sling1.display();
}

async function getTime() {
    var response = await fetch("http://worldtimeapi.org/api/timezone/America/New_York")
    var responseJSON = await response.json();
    var hour = responseJSON.datetime.slice(11, 13)
    console.log(hour)
    if (hour >= 6 && hour <= 18) {
        // return true
        // console.log("no")
        bg = loadImage("white.jpg")
    } else {
        // return false
        // console.log("yes")
        bg = loadImage("black.jpg")
    }
}
