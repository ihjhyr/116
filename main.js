NoseX = 0;
NoseY = 0;
function preload() {
clown_nose = loadImage('https://i.postimg.cc/3NxrZRsg/580b57fbd9996e24bc43bed5.png');
}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.center();
    video.hide();

    posenet = ml5.poseNet(video, Modelloaded);
    posenet.on('pose', gotPoses);
}
function Modelloaded() {
    console.log('Model is Loaded');

}
function draw() {
    image(video, 0, 0, 300, 300);
    fill('red');
    stroke('red');
    //circle(NoseX,NoseY,20);
    image(clown_nose,NoseX,NoseY,100,100);
}
function take_snapshot() {
    save('download.jpg');
}
function gotPoses(result) {
    if (result.length > 0) {
        console.log(result);
        console.log('nose x = ' + result[0].pose.nose.x);
        console.log('nose y = ' + result[0].pose.nose.y);
        NoseX = result[0].pose.nose.x;
        NoseY = result[0].pose.nose.y;
    }
}