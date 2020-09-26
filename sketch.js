const Engine = Matter.Engine;
const World= Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;

var engine, world;
var score;
var manaspcfont;
var doctor, doctorimg, doctoroptions;
var vaccine, vaccinecount;
var virus, viruscount, virusfrequency;
var themesong, deathsound;


function preload() {
  themesong = loadSound('covid song.mp3');
  deathsound = loadSound('death.mp3');
  doctorimg = loadImage('doctor.png');
  manaspcfont = loadFont('manaspc.ttf');
}

function setup() {
  createCanvas(1600,800);

  textFont(manaspcfont);
  textSize(20);

  themesong.play();

  engine = Engine.create();
  world = engine.world;

  vaccine = [];
  vaccinecount = 0;

  virus = [];
  viruscount = 0;

  doctoroptions = {
    isStatic: true
  }

  doctor = Bodies.rectangle(100,400,300,300, doctoroptions);
  World.add(world,doctor);
}

function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  imageMode(CENTER);
  background(0);  

  if(keyWentDown("SPACE")){
    spawnVaccine();
  }

  console.log(frameCount);
  //if()

  if(vaccinecount>0){
    for(var i=0;i<vaccinecount;i++){
      Body.setPosition(vaccine[i].body,{x: vaccine[i].body.position.x + 20,y: vaccine[i].body.position.y});
      vaccine[i].display();
    }
  }
  if(viruscount>0){
    for(var i=0;i<viruscount;i++){
      Body.setPosition(virus[i].body,{x: virus[i].body.position.x - 20,y: virus[i].body.position.y});
      virus[i].display();
    }
  }

  if(keyDown(UP_ARROW)){
    Body.setPosition(doctor,{x: doctor.position.x,y: doctor.position.y-20})
  }
  if(keyDown(DOWN_ARROW)){
    Body.setPosition(doctor,{x: doctor.position.x,y: doctor.position.y+20})
  }

  image(doctorimg, doctor.position.x, doctor.position.y, 400, 400);
  
  drawSprites();
}

function spawnVaccine() {
  vaccine[vaccinecount] = new Vaccine(doctor.position.y);
  vaccinecount += 1;
}

function spawnVirus() {
  var rand = random(1,800);
  virus[viruscount] = new Virus(rand);
  viruscount += 1;
}