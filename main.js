diffrence=0
rightWristX=0
leftWristX=0


noseX=0
noseY=0

function preload()
{
    badCar=loadImage("filthy.png")
}

function setup()
{
 video=createCapture(VIDEO)
 video.size(400,400)
 canvas=createCanvas(450,415)
 canvas.position(700,170)
 poseNet=ml5.poseNet(video,modelLoaded)
poseNet.on('pose',gotPoses)
}

function modelLoaded()
{
    console.log("Moadel is loaded")
}

function gotPoses(results)
{
if(results.length>0)
{
    console.log(results)
    noseX=results[0].pose.nose.x
    noseY=results[0].pose.nose.y

    leftWristX=results[0].pose.leftWrist.x
    rightWristX=results[0].pose.rightWrist.x
    diffrence=floor(leftWristX-rightWristX)
}
}

function draw()
{
    background("black")
    image(badCar,noseX,noseY,diffrence,diffrence)
}