function preload()
{
    img=loadImage("bedroom.jpg")
}

function setup()
{
    canvas=createCanvas(380,380);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="status:detecting objects";
}

function modelLoaded()
{
    console.log("model Loaded");
    status=true;
    objectDetector.detect(img, gotResult);
}

function gotResults()
{
    console.log(results);
    if(error){
        console.log(error);
      }
      console.log(results);
}