 var cind
function preload(){
 spa = loadAnimation("ready.png");
 BGI = loadImage("bg.jfif");
 spa2 = loadAnimation("step1.png");
 spa3 = loadAnimation("2.png");
 spa4 = loadAnimation("h.png");
   s1 = loadImage("s1.png");
    s2 = loadImage("s2.png")
   s3 = loadImage("s3.png")
goI = loadImage("go.png")
}
function setup() {
 createCanvas(600,500);
 bg = createSprite(300,200,20,20);
 bg.addImage(BGI);
 bg.scale = 2;
 cind = createSprite(300,200,20,20);
 cind.addAnimation("k",spa);
 cind.addAnimation("s",spa2);
 cind.addAnimation("z",spa3);
 cind.addAnimation("a",spa4)
  S1 = createSprite(500,450,20,20); 
  S1.addImage(s1);
  S1.scale = 0.3
  S2 = createSprite(50,450,20,20); 
  S2.addImage(s2);
  S2.scale = 0.3;
  S3 = createSprite(250,450,20,20);
  S3.addImage(s3);
  S3.scale = 0.3
  S2.visible = false
  S3.visible = false;
  go = createSprite(400,450,20,20);
  go.addImage(goI);
  go.scale = 0.2
}

function draw() {
 background("white");
  if(mousePressedOver(S1)){
    cind.changeAnimation("s",spa2);
    S2.visible = true;
    S1.visible = false;
  }
  
    if(mousePressedOver(S2)){
    cind.changeAnimation("z",spa3);
    S2.visible = false;
    S3.visible = true;
    }
  
      if(mousePressedOver(S3)){
    cind.changeAnimation("a",spa4);
    cind.scale = 1.5
    bg.visible = false;
    S3.visible = false;
    }
if(mousePressedOver(go)){
  link = createA("https://navithaejigeorge.github.io/Trex/","click here")
  link.position(180,480)
}
 drawSprites();
  textSize(20);
  text("click on the steps",180,450);
}