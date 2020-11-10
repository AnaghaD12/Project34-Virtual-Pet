//Create variables here
var dog, hd, db, foodS, foodStock, dg

function preload()
{
  //load images here
  dg = loadImage("images/dogImg.png")
  hd = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,300,50,50)
  dog.addImage(dg)
  dog.scale = .5
 
  db = firebase.database() 
 
foodStock=db.ref('Food')
foodStock.on("value",readStock)
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(hd)
}


  drawSprites();
  //add styles here
  fill("black")
  text("Press up arrow to feed your dog!",250,100);
  text(foodS,250,150);

}


function readStock(data){
  foodS=data.val();
}
function writeStock(x){

if(x<=0){
  x=0;
}else{
  x=x-1;
}

  db.ref('/').update({
    Food : x 
  })
}

