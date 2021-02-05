var hr,mn,sc;
var hrAngle;
var mnAngle,scAngle;

function setup(){
  createCanvas(400,400)
  angleMode(DEGREES); 
}
function draw(){
  
background(0);



hr=hour();
mn=minute();
sc=second();
fill("white")
text(hr%12+":"+mn+":"+sc,100,200)
translate (200,200);
rotate (-90);
scAngle=map(sc,0,60,0,360)
mnAngle=map(mn,0,60,0,360)
hrAngle=map(hr%12,0,12,0,360)
push();
rotate(scAngle)
strokeWeight(7);
stroke("orange")
line(0,0,100,0)
pop();

push();
rotate(mnAngle)
strokeWeight(7);
stroke("blue")
line(0,0,80,0)
pop();

push();
rotate(hrAngle)
strokeWeight(7);
stroke("green")
line(0,0,60,0)
pop();

strokeWeight(7);
stroke("white")
point(0,0);

strokeWeight(10);
stroke("orange")
noFill();
arc(0,0,300,300,0,scAngle)

strokeWeight(10);
stroke("blue")
noFill();
arc(0,0,280,280,0,mnAngle)

strokeWeight(10);
stroke("green")
noFill();
arc(0,0,260,260,0,hrAngle)


}