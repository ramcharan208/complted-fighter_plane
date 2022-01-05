var PLAY = 1;
var END = 0;
var gameState = PLAY ;


var mode ;

var backgroundb, backgroundImg ;

var ship, shipimg;

var bullet ;

var enemyGroup , enemyImg  ; 

var bulletGroup ;

var enemy2Group,enemy2img ;

var enemy3Group , enemy3img ;

var enemyGroup4 , enemy4Img ;

var enemyGroup5,enemy5Img ;

var life ;

var life1,life1Img;

var life2,life2Img

var life3 ,life3Img;

var score ;


localStorage["HS"] = 0 ;


var hitingsound , bullethitingsound ;


function preload(){
  


  backgroundImg = loadImage("background.png")
  
  shipimg = loadImage("shship.png")
  
  enemyImg = loadImage("enemyship.png");
  
  enemy2img = loadImage("fireball.png");
  
  enemy3img = loadImage("asteriod.png");
  
  enemy4Img = loadImage("meteroid image.png")
  
  enemy5Img = loadImage("meteroid image-1.png")
  
  
  life1Img = loadImage("shship.png");
  
  life2Img = loadImage("shship.png");
  
  life3Img = loadImage("shship.png");
  
  
  hitingsound = loadSound("mixkit-arcade-chiptune-explosion-1691.wav");
  
  
  bullethitingsound = loadSound("mixkit-pixel-chiptune-explosion-1692.wav");
  
  
}








function setup (){

  createCanvas(600,500)
  
  

  backgroundb = createSprite(300,250);
  backgroundb.addImage(backgroundImg);
  backgroundb.scale= 2.5 ;
  backgroundb.velocityY =8;
  

  ship = createSprite(300,450,20,20);
  ship.scale = 0.25;
  ship.addImage(shipimg);
  

  
  enemyGroup  = createGroup();
  
  bulletGroup = createGroup();
  
  enemy2Group = createGroup();
  
  enemy3Group = createGroup();
  
  enemy4Group = createGroup();
  
  enemy5Group = createGroup();
  
  

  
  life1 = createSprite(20,20,20,20);
  life1.addImage(life1Img);
  life1.scale = 0.1 ;
  
  
  life2 = createSprite(55,20,20,20);
  life2.addImage(life2Img);
  life2.scale = 0.1 ;
  
  
  life3 = createSprite(90,20,20,20);
  life3 .addImage(life3Img);
  life3.scale = 0.1;
  

  score = 0;
  

  life = 3 ;
  

  mode = 0; 
  
  
}




function draw(){

  background("backGroundImg");
  

  drawSprites()
  

  edges =   createEdgeSprites();

   if(backgroundb.y>400){
    backgroundb.y =height/2
  }
  
  
  

  if(mode == 0 ){
    
    textSize(18)
    fill("white")
    noStroke();
    text("PRESS ENTER TO START GAME",200,100);
    text("PRESS SPACE TO SHOOT ",220 ,130);
    text("TRY TO SUVIVE FOR LONG.USE THE MOUSE TO MOVE THE ROCKET",2 ,200);
  text("YOU HAVE 3 LIVES ",15,60 );
    
  
    
    if(keyDown("enter")){
      mode = 1 ;
    }
  }
  
  
  
 
  
  if(mode == 1 && gameState === PLAY){
  

  ship.x = World.mouseX;
  
 
  ship.collide(edges);
  
    

 if(keyWentDown("space")){
  createbullet();
   
 }
  
  
  

   
  if(enemyGroup.isTouching(bulletGroup)){
    enemyGroup.destroyEach();
    bulletGroup.destroyEach();
    bullethitingsound.play();
  }

    
   if(enemy2Group.isTouching(bulletGroup)){
    enemy2Group.destroyEach();
    bulletGroup.destroyEach();
      bullethitingsound.play();
    
  }
  
    
   if(enemy3Group.isTouching(bulletGroup)){
    enemy3Group.destroyEach();
    bulletGroup.destroyEach();
      bullethitingsound.play();
  }
  
    
  if(enemy4Group.isTouching(bulletGroup)){
    enemy4Group.destroyEach();
    bulletGroup.destroyEach();
     bullethitingsound.play();
  }
  
    
  if(enemy5Group.isTouching(bulletGroup)){
    enemy5Group.destroyEach();
    bulletGroup.destroyEach();
     bullethitingsound.play();
  }
  
  
  
    
   if(ship.isTouching(enemyGroup)){
     life = life-1;
     enemyGroup.destroyEach();
     hitingsound.play();
   } 
    
    
    
    if(ship.isTouching(enemy2Group)){
     life = life-1;
     enemy2Group.destroyEach();
       hitingsound.play();
   }  
    
    
     if(ship.isTouching(enemy3Group)){
     life = life-1;
     enemy3Group.destroyEach();
        hitingsound.play();
   } 
    
    
     if(ship.isTouching(enemy4Group)){
     life = life-1;
     enemy4Group.destroyEach();
        hitingsound.play();
   } 
    
    
     if(ship.isTouching(enemy5Group)){
     life = life-1;
     enemy5Group.destroyEach();
        hitingsound.play();
   } 
    
    
 
  

  score = score + Math.round(frameCount/50);
  
    

   createenemy();
 
  
  
  if(score >= 100 && enemyGroup.isTouching(edges)) {
 
  enemyGroup.setLifetimeEach(0);
  enemyGroup.destroyEach();
  enemyGroup.setVelocityYEach(0);
  enemyGroup.setVisibleEach(false); 
  enemyGroup.pointToEach(-100,-100);
  enemyGroup.setScaleEach(0);
  enemyGroup.bounceOff(edges);
    
    
    createenemy2();
    createenemy3();
    
    

  }
  

  if(score >= 25000 ){
    
   
  
  enemy2Group.destroyEach();
  enemy2Group.setLifetimeEach(0);
  enemy2Group.setVelocityYEach(0);
  
     
    
  enemy3Group.destroyEach();
  enemy3Group.setLifetimeEach(0);
  enemy3Group.setVelocityYEach(0);
    
  
    createenemy4();
    createenemy5();
    
  }
  
    
    if(life === 2){
      
    life3.x = -100;
    life3.y = -100;
      
    }
    
   
    if(life === 1){
      
      life2.x= -200;
      life2.y -400;

    }
    

    if(life === 0){
      
      life1.x = -300;
      life.y= -400;
      
      gameState = END ; 
      
    }
     
  }
  else{
  
    if(gameState === END){

      backgroundb.velocityY = 0;
      

      
     
      enemyGroup.destroyEach();
      
      enemy2Group.destroyEach();
      
      enemy3Group.destroyEach();
      
      enemy4Group.destroyEach();
      
      enemy5Group.destroyEach();
      
      bulletGroup.destroyEach();

    
      
      textSize(20);
      fill("white");
      noStroke();
     
      text("GAMEOVER!",230,200);
      text("PRESS ENTER TO PLAY AGAIN",150,250);
      
      text("HIGHEST SCORE = " + localStorage["HS"],280,50);

      if(keyDown("enter")){
        
        reset();
      }
      
    }
    
  }
  
  
  

  
  textSize(20);
  fill("blue");
  stroke("red");
  strokeWeight(0.8)
  text("Score = " + score , 400,20)
  text("HIGHEST SCORE = " + localStorage["HS"],280,50);
  
 
}



function createbullet(){
  
  bullet = createSprite(300,450,1,10);
  bullet.shapeColor = "yellow"
  bullet.velocityY = -12;
  bullet.lifetime = 50;
  bullet.x = ship.x
  
  bulletGroup.add(bullet);
      
  }
  



function createenemy(){
  
  if(frameCount%100 === 0){
    
    enemy1 = createSprite(-100,-100,20,20);
    enemy1.x= Math.round(random(20,580));
    enemy1.scale  = 0.9 ;
    enemy1.velocityY= Math.round(random(9,12)); 
    enemy1.addImage(enemyImg);
    enemy1.y = -10;
    enemy1.lifetime = 150;
    
    enemyGroup.add(enemy1)
    
  }
}





function createenemy2(){
  
  if(frameCount % 100 === 0){
    
    enemy2 = createSprite(-10,-10,20,20);
    enemy2.y= Math.round(random(20,150));
    enemy2.scale = 0.1;
    enemy2.velocityY= Math.round(random(5,15)); 
    enemy2.velocityX = Math.round(random(5,15));
    enemy2.addImage(enemy2img);
    enemy2.x = Math.round(random(-50,-10));
    enemy2.lifetime = 150;
    enemy2.rotationSpeed = 10 ;
    enemy2.debug = false ;
    enemy2.setCollider("circle",0,0,200)
    
    enemy2Group.add(enemy2)
    
    
  }
 
  }



function createenemy3(){
  
  if(frameCount % 100 === 0){
    
  enemy3 = createSprite(660,100,20,20);
  enemy3.addImage(enemy3img);
  enemy3.scale = 0.1 ;
  enemy3.velocityX = Math.round(random(-6,-18)) ;
  enemy3.velocityY = Math.round(random(5,16)) ;
  enemy3.x = Math.round(random(610,700));
  enemy3.y = Math.round(random(20,100));
  enemy3.rotationSpeed = 10 ;
  enemy3.lifetime = 150 ;
  enemy3.setCollider("circle",0,0,200);
  enemy3. debug = false ;
    
  enemy3Group.add(enemy3)
    
  }
    
  }



function createenemy4(){
  
  if(frameCount % 50 === 0){
    
  enemy4 = createSprite(660,100,20,20);
  enemy4.addImage(enemy4Img);
  enemy4.scale = 0.1 ;
  enemy4.velocityX = Math.round(random(-10,-20)) ;
  enemy4.velocityY = Math.round(random(10,20)) ;
  enemy4.x = Math.round(random(610,700));
  enemy4.y = Math.round(random(20,100));
  enemy4.rotationSpeed = 0 ;
  enemy4.lifetime = 150 ;
  enemy4.setCollider("circle",0,0,200);
  enemy4. debug = false ; 
    
  enemy4Group.add(enemy4);
    
  }
    
  }




function createenemy5(){
  
  if(frameCount%50 === 0){
    
    enemy5 = createSprite(-100,-100,20,20);
    enemy5.y= Math.round(random(20,150));
    enemy5.scale = 0.1;
    enemy5.velocityY=Math.round(random(10,20)); 
    enemy5.velocityX = Math.round(random(10,20));
    enemy5.addImage(enemy5Img);
    enemy5.x = Math.round(random(-100,-10));
    enemy5.lifetime = 150;
    enemy5.rotationSpeed = 0 ;
    enemy5.debug = false ;
    enemy5.setCollider("circle",0,0,200);
    
    enemy5Group.add(enemy5)
      
  }
     
  }





  function reset(){
    
  gameState = PLAY ;
  
    life1.x = 20 ;
    life1.y = 20;
    
    
    life2.x = 55 ; 
    life2.y = 20;
    
    
    
    life3.x = 90;
    life3.y = 20;
    
    
  enemyGroup.destroyEach();
    
  enemy2Group.destroyEach();
    
  enemy3Group.destroyEach();
    
  enemy4Group.destroyEach(); 
    
  enemy5Group.destroyEach();
    
  backgroundb.velocityY = 8; 
    
    

  if(localStorage["HS"]<score){
    
    localStorage["HS"] = score ;
    
  }
  

  
score = 0;
  
life  =3 ;
  
mode = 1 ;
  
score = score + Math.round(frameCount/50);
  
}








