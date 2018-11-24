//Var lifespan is used to measure and control how long the raindrops stay on the screen before disappearing, and then ultimately re-appearing.
var lifespan;

//these two commented out variables are from testing and are redundant now.
//var x = random(10, 250);
//var y = random(10, 250);

//var size is for the inner circle in the raindrop while size2 is used for the size of the outer circle
var size;
var size2;

//Variables used for determining the coordinates on the 4 quadrants of the canvas, could be simplified to fewer variables but prefer having 4 sets.
var x,y;
var x2,y2;
var x3,y3;
var x4,y4;

//Variable that is used with the X axis of the mouse to control the colour of the screen when used.
var nightDay


//function for vital code. Has the canvas inside of it determining the size of the picture worked on. Also hosts frameRate and variable values.
function setup(){

//createCanvas is set to 1000 by 1000 pixels, I chose this as its a clear and straight number to use and is big enough to work on but isn't too big that it makes everything look small on it.
createCanvas(1000,1000);
//frameRate is set to 25fps(Frames per second) so it doesn't look so slow paced you can tell it isn't smooth animation while being slow enough that you can observe the animation. Also runs slow enough to see an after effect on the previous ellipse that were drawn.
frameRate(25);

//setting the default size for the raindrop circles. size is the interior circle while size2 is the outer circle, these will both expand in the code inside draw.
size=50;
size2=80;

//lifespan starts at 5 to give the stroke some width while not being too large that it will look out of place. Also serves as a starting point for the countdown.
lifespan=5;

//generation of the random coordinates for each raindrop.
//Top left
x = random(10, 490);
y = random(10, 490);
//top right
x2 = random(510, 990);
y2 = random(10, 490);
//bottom left
x3 = random(10, 490);
y3 = random(510, 990);
//bottom right
x4 = random(510, 990);
y4 = random(510, 990);
}


//create a continual loop that can be used to forever create objects.
function draw(){

//variable value for nightDay, this code makes it so that the variable tracks where the mouse X axis is on screen and changes the variable from 0-255.
nightDay = map(mouseX, 0, width, 0, 255);

//background colour for the canvas, placed in the loop so that it draws over the last shape created, this is done so that the screen is not filled with millions of circles. The blue value has the variable nightDay, this is done so that as the mouse moves from left to right, the variable will increase form 0 all the way to 255. Giving an illusion of going form night to day.
background(0, 0, nightDay, 127);

//strokeWeight is going off of the lifespan variable so that it starts at 5 and will work with the equations beneath.
strokeWeight(lifespan);

//this is so that the shapes generated will not have any colours inside of them, this is instead of doing code reading fill(0,0,0,255);
noFill();

//code done in draw so that the variables size and size2 will forever increase as the code functions.
size = size + 5;
size2 = size2 + 10;

//code so that the variable lifespan will decrease by 0.25 every frame, this is done so that the width of the stroke will decrease as the shapes expand and to work as a timer. It is set at 0.25 so that it gives time to observe the shapes but they do not stay on the screen for too long.
lifespan = lifespan - 0.25;

//an iff statement, based on the value of lifespan. I don't fully remember how it works, best guess is that it times how long the variable lifespan has been running and then activates if it has been running for a certain period of time.
if(lifespan == 5){

//code to remove the strokes from the shapes, rendering them all invisible.
noStroke();

}

//a console log used when you inspect element to allow the dev to see the variable lifespan in all of its stages as it runs.
console.log(lifespan);

//More defunct code used while testing. Redundant.
//ellipse(500, 500, size, size);
//x = x + 1;
//y = y - 1;

//function call commands, calling functions from lower down the line after the draw function, calling them in an order to be drawn.
rainDrop1();
rainDrop2();
rainDrop3();
rainDrop4();

//if statement on when the lifespan variable goes onto the negative number of 5, it will activate. This is done by the constantly decreasing number seen earlier.
if(lifespan == -5){

//these reset the variables that have been changed such as lifespan, size and size2 so that they can start changing again after the if statement ends.
  lifespan=5
  size=50
  size2=80

  //code to make the positions of all the x and y variables restart and become random again. Allowing the shapes to move to a new location.
  x = random(10, 500);
  y = random(10, 500);
  x2 = random(510, 990);
  y2 = random(10, 500);
  x3 = random(10, 490);
  y3 = random(510, 990);
  x4 = random(510, 990);
  y4 = random(510, 990);

}

}

//function that is called inside of draw, creates 2 ellipse along with the other 3 functions.
//top left raindrop
function rainDrop1(){

//redundant code used during testing to see if lifespan functioned by seeing if the colours disappeared to test the lowering number.
//fill(0,255,0,lifespan);

//creates two ellipses(circles) at the same x and y coordinates, one being created at a larger size then the other so that they appear to be ripples. These use the variables seen earlier.
ellipse(x, y, size, size);
ellipse(x, y, size2, size2);

//more redundant code used during early testing of the this. command for variables and earlier versions of the variables that would become x and y.
//fill(50,100,255,this.lifespan);
//ellipse(rainX, rainY, random(20, 40));

}

//top right raindrop
function rainDrop2(){
ellipse(x2, y2, size, size);
ellipse(x2, y2, size2, size2);
}

//bottom left raindrop
function rainDrop3(){
ellipse(x3, y3, size, size);
ellipse(x3, y3, size2, size2);
}

//bottom right raindrop
function rainDrop4(){
ellipse(x4, y4, size, size);
ellipse(x4, y4, size2, size2);
}
