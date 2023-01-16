function setup(){
canvas=createCanvas(600,450);
canvas.center();
video=createCapture(VIDEO);
video.hide();
}
tint_color="";
function apply_tint(){
    tint_color=document.getElementById("color_name").value;
}
function draw(){
    image(video,190,130,220,200);
    fill("green");
    stroke("green");
    circle(50,50,60);
    circle(50,400,60)
    circle(550,50,60);
    circle(550,400,60);
    fill("orange");
    stroke("orange");
    rect(80,40,440,20);
    rect(80,390,440,20);
    rect(40,80,20,290);
    rect(540,80,20,290);
}
function take_snapshot(){
    save("my img.jpg");
}