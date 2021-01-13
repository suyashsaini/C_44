var PLAY = 1;
var END = 0;
var gameState = PLAY;
var tile1,tile1Img

var score=0;
var boundary,boundaryImg

var sprite,sprite_img;
var slab,slabImg, slabG;
var vol_slab,vol_slabImage,vol_slabG;

function preload(){
tile1Img = loadImage("floor.png")
sprite_img = loadImage("pic.png")
sprite_img = loadImage("pic.png")
boundaryImg = loadImage("11.png")
slabImg = loadImage("box.png")
vol_slabImage = loadImage("slab1.png")

slab_img = loadImage("slab2.png")
slab1_img = loadImage("slab.png")
slabG = new Group();
vol_slabG= new Group();

playerFire= loadImage("playerfire.png")

enemy1Img = loadImage("enimies.png")
enemy2Img = loadImage("enimies.png")
enemy3Img = loadImage("enimies.png")
}

function setup() {
  createCanvas(displayWidth-10,displayHeight-166);

//   // CREATE fLOOR
  for(var x=-1000; x <2000; x+=400){
  for(var y=-2000; y< 1000; y+=400){
 tile1 = createSprite(x,y)
 tile1.addImage(tile1Img)
 tile1.scale = 5
  }
}

//CREATE SLABS

box1 =  createSprite(800,0);
box1.addImage(slabImg)
box1.debug = true


slab_2 = createSprite(1000,-150)
slab_2.addImage(slab1_img)
slab_2.scale=1.9



box2 = createSprite(1200,0);
box2.addImage(slabImg)
box2.debug = true

box3 = createSprite(200,250);
box3.addImage(slabImg)
box3.debug = true


slab_2 = createSprite(20,447)
slab_2.addImage(slab_img)
slab_2.scale=1.7
slab_2.height=600

box4 = createSprite(200,650);
box4.addImage(slabImg)
box4.debug = true

box5= createSprite(1200,650);
box5.addImage(slabImg)
box5.debug = true

slab_1 = createSprite(1050,515)
slab_1.addImage(slab_img)
slab_1.scale=1.3

enemy1= createSprite(1250,415)
enemy1.addImage(enemy1Img )
enemy1.scale= 0.5

box6= createSprite(-200,-340);
box6.addImage(slabImg)
box6.debug = true

box7= createSprite(800,-300);
box7.addImage(slabImg)
box7.debug = true

enemy2= createSprite(1150,-405)
enemy2.addImage(enemy1Img )
enemy2.scale= 0.5


box8= createSprite(800,-460);
box8.addImage(slabImg)
box8.debug = true

box9= createSprite(-45,-860)
box9.addImage(slabImg)
box9.debug = true

slab_3 = createSprite(-60,-460)
slab_3.addImage(slab1_img)
slab_3.scale=1.3

 box10= createSprite(1000,-1200)
 box10.addImage(slabImg)
 box10.debug = true

 box11= createSprite(1230,-300)
 box11.addImage(slabImg)
 box11.debug = true

 box12= createSprite(-190,-1320)
 box12.addImage(slabImg)
 box12.debug = true

slab_5 = createSprite(-60,-1200)
slab_5.addImage(slab1_img)
slab_5.scale=1.3

 box14= createSprite(1100,-1880)
 box14.addImage(slabImg)
 box14.debug = true

slab_4 = createSprite(99,-720)
slab_4.addImage(slab_img)
slab_4.scale=1.3

 box15= createSprite(1300,-1880)
 box15.addImage(slabImg)
 box15.debug = true

 sprite = createSprite(0,0);
 //sprite.setAnimation("bunny1_go_1");
 sprite.addImage(sprite_img)
  sprite.scale=0.9
  score = 0;
}

function draw() {
  //trex.debug = true;
  background("#008B8B");
  sprite.collide(box1)
  sprite.collide(box2)

  sprite.collide(box3)

  sprite.collide(box4)

  sprite.collide(box5)

  sprite.collide(box6)

  sprite.collide(box7)

  sprite.collide(box8)

  sprite.collide(box9)

  sprite.collide(box10)

  sprite.collide(box11)

  sprite.collide(box12)

  sprite.collide(box14)

  sprite.collide(box15)

  sprite.collide(slab_5)

  sprite.collide(slab_4)

  sprite.collide(slab_3)

  sprite.collide(slab_1)

  sprite.collide(slab_2)

  

  //sprite.collide(box1)

  camera.x=sprite.x;
  camera.y=sprite.y;
  if (keyDown("right")) {
    sprite.x = sprite.x+30;
    sprite.mirrorX(1);
  }
  if (keyDown("left")) {
    sprite.x = sprite.x-30;
    sprite.mirrorX(-1); 
    sprite.rotattion =90   
  }

  if (keyDown("up")) {
    sprite.y = sprite.y-30;
    sprite.mirrorY(1);
  }
  if (keyDown("down")) {
    sprite.y = sprite.y+30;
    sprite.mirrorY(-1);
       
  }
  if (keyDown("z")) {
    camera.zoom = camera.zoom - 0.1;
  }
  if (keyDown("S")) {
    camera.zoom = camera.zoom + 0.1;
  } 

  //up- q   right- d,left-a up-q down-e

  if(keyDown("q")){
    var shot = createSprite(sprite.x, sprite.y)
    shot.velocityY = -5
    shot.addImage(playerFire)
    shot.scale = 0.4
  }

  if(keyDown("d")){
    var shot = createSprite(sprite.x, sprite.y)
    shot.velocityX = 5
    shot.addImage(playerFire)
    shot.scale = 0.4
  }

  if(keyDown("a")){
    var shot = createSprite(sprite.x, sprite.y)
    shot.velocityX = -5
    shot.addImage(playerFire)
    shot.scale = 0.4
  }

  if(keyDown("e")){
    var shot = createSprite(sprite.x, sprite.y)
    shot.velocityY = 5
    shot.addImage(playerFire)
    shot.scale = 0.4
  }
//MAP VIEW
  // if (camera.isActive()) {
  //   camera.x = World.mouseX;
  //   camera.y = World.mouseY;
  // }

// box1()
// sprite.collide(slabG)
  drawSprites();
}

// function box1(){
//   if(frameCount < 30){
//     slab = createSprite(random(-1000,1600),random(-1000,600))
//     vol_slab=createSprite(slab.x+100,slab.y+100)
//     vol_slab.addImage(vol_slabImage)
//     slab.addImage(slabImg)
//     slab.scale =0.4
//    // vol_slab.scale =0.1
//     slab.debug=true
//  slab.velocityY =  0.0000000001
//     slabG.add(slab)
//     slab.setCollider("rectangle",0,0,150,150)
//   }
// }

//up- q  e-d right- dleft-a up-q down-e

