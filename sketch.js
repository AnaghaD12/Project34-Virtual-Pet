//Create variables here
var dog, hd, db, foodS, foodStock, dg,had

function preload()
{
  //load images here
  dg = loadImage("images/dogImg.png")
  had = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,300,50,50)
 
  hd = createSprite(250,400,50,50)
 
foodStock=db.ref('Food');
foodStock.on("value",readStock)
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_Arrow)){
  writeStock(foodS);
  dog.addImage(had)
}
  drawSprites();
  //add styles here
  text("Press up arrow to feed your dog!")

}


function readStock(data){
  foosS=data.val();
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