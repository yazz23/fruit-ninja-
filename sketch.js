var PLAY = 1;
var END = 0;
var gameState = PLAY;

var fruitGroup,enemyGroup

var alien1,alien2,fruit1,fruit2,fruit3,fruit4,gameover,sword
var alien1Image,alien2Image,fruit1Image,fruit2Image,fruit3Image,fruit4Image,gameoverImage,swordImage

function preload(){
alien1Image=loadAnimation("alien1.png","alien2.png")  
//alien2Image=loadImage("alien2.png")
fruit1Image=loadImage("fruit1.png")
fruit2Image=loadImage("fruit2.png")
fruit3Image=loadImage("fruit3.png")  
fruit4Image=loadImage("fruit4.png")
gameoverImage=loadImage("gameover.png")
swordImage=loadImage("sword.png")
 
}
function setup(){
 createCanvas(600,600)
sword=createSprite(40,200,20,20)
sword.addImage(swordImage);
sword.scale=0.7
  

  fruitGroup = new Group();
enemyGroup=new Group();

  
}

function draw(){
  
  background("white")
  
  sword.x=mouseX
 sword.y=mouseY
  
  fruits();
  enemy();
  
drawSprites() 
  
 
}


function fruits() {
  if (World.frameCount%80===0){
    fruit1=createSprite(400,200,20,20)
    fruit1.scale=0.2
    r=Math.round(random(1,4))
    if (r==1){
      fruit1.addImage(fruit1Image)
    }
    else if(r==2){
      fruit1.addImage(fruit2Image)
    }
    else if (r==3){
      fruit1.addImage(fruit3Image)  
    }
    else{
      fruit1.addImage(fruit4Image)
    }
    fruit1.y=Math.round(random(50,340));
    fruit1.velocityX=-7
    fruit1.setlifetime=100;
    fruitGroup.add(fruit1)
  }
  }
 
function enemy(){
 if(World.frameCount%50==0){
var   monster=createSprite(400,200,20,20) 
   monster.addAnimation("moving",alien1Image)
   monster.y=Math.round(random(100,300))
   monster.velocityX=-8
   monster.setLifetime=50;
   
   enemyGroup.add(monster)
   
 }
  
  
}
//sword.addImage(gameOverImage)
//sword.x=200
//sword.y=200






