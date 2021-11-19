var box1,box2;
function setup() 
{
  createCanvas(400, 400);
  box1 = new Box(250,250,60,70,-5,-5)
}

function draw() 
{
  background(220);
 box1.show()
 box1.moveUp()
 box1.move()

}

