nosex = 0;
nosey = 0;

function preload(){
   mustache= loadImage("https://i.postimg.cc/PqjZSvCH/mustache.png");
}

function setup(){
canvas = createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.hide();
video.size(300, 300);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function draw(){
image(video, 0, 0, 300, 300 );
image(mustache, nosex, nosey, 50, 50);
}

function take_snap(){
   save('boom.png');
}

function modelLoaded(){
   console.log("POSEnet run run");
}

function gotPoses(result){
   if(result.length>0){
      console.log(result);
      nosex = result[0].pose.nose.x;
      nosey = result[0].pose.nose.y;
   }
}