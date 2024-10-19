//Haus
background(8, 8, 8);
fill(65, 68, 87);
rect(59, 150, 280, 207);

// Fenster
fill(211, 227, 120);
var fensterBreite=61;
var fensterHoehe=38;
var startX=81;
var startY=166;
var abstandX=26;
var abstandY=21;

//Gras
for(var reihe=0; reihe<2; reihe++) {
    for ( var spalte=0; spalte<3;spalte++) { rect(startX+spalte*(fensterBreite+abstandX), startY+reihe*(fensterHoehe+abstandY), fensterBreite, fensterHoehe);}
}

for ( var i=0; i<3; i++) {
    var Image =getImage("cute/GrassBlock");
    image(Image,i*132,340,138,63);
}
for ( var i=0; i<2; i++) {
    var Image =getImage("cute/TreeShort");
    image(Image,i*333,255,92,151);
}
    var Image =getImage("cute/CharacterBoy");
    image(Image,212,255,92,151);
    var Image =getImage("cute/RoofEast");
    image(Image,201,14,140,136);
    var Image =getImage("cute/RoofWest");
    image(Image,58,15,147,136);

//Tür 
fill(120, 80, 19);
rect(180, 280, 40, 77);
var tueroeffnung=0;
var tuerBreite=40;
var tuerHoehe=77;
var tuerX=180;
var tuerY=280;

//Animation
function draw(){
fill(204, 207, 54);
tueroeffnung=sin(frameCount*0.08)*tuerBreite/2+tuerBreite/2;
rect(tuerX, tuerY, tueroeffnung, tuerHoehe);
}



