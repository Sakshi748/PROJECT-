const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    getBackgroundImg( );
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
    background(backgroundImg);
    Engine.update(engine);
    textSize(32);
    fill("black");
    text("time:",100,70);
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata"); 
    var responseJSON = await response.json(); 
    var datetime = responseJSON.datetime; 
    var hour = datetime.slice(11,13);

   if(hour>=04 && hour<=05){ 
    bg = "sunrise1.png";
 }
   else if(hour>=05 && hour<=06){
    bg= "sunrise2.png";
   }
   else if(hour>=06 && hour<=07){
    bg= "sunrise3.png";
   }
   else if(hour>=07 && hour<=08){
    bg= "sunrise4.png";
   }
   else if(hour>=09 && hour<=10){
    bg= "sunrise5.png";
   }
   else if(hour>=10 && hour<=15){
    bg= "sunrise6.png";
   }
   else if(hour>=15 && hour<=16){
    bg= "sunrise7.png";
   }
   else if(hour>=16 && hour<=17){
    bg= "sunrise8.png";
   }
   else if(hour>=17 && hour<=18){
    bg= "sunrise9.png";
   }
   else if(hour>=18 && hour<=19){
    bg= "sunrise10.png";
   }
   else if(hour>=19 && hour<=21){
    bg= "sunrise11.png";
   }
   else{ 
   bg = "sunrise12.png"; 
   }

  backgroundImg = loadImage(bg); 
  console.log(backgroundImg);

}
