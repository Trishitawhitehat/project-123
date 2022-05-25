leftWristX = 0;
rightWristX = 0;
X = 0;
Y = 0; 
function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}

function gotPoses() {
    if (results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWristX.X;
        rightWristX = results[0].pose.rigjtWristX.Y;
        difference = floor(leftWristX - rightWristX);
    }
}

function draw() {
    background('#969A97');
    fill('#E84A99');
    textsize(difference);
    text('Trishita', 50, 400);
}