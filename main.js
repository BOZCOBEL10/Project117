currentRotation = 0;
aui = document.getElementById("MyAudio")
function preload(){

}

function setup(){

}

function draw(){

}

function Balllin(){
    var bodyElement = document.body;
    currentRotation += 15;
    bodyElement.style.transform = 'rotate(' + currentRotation + 'deg)';
}    

function fort(){
    aui.play();
    setInterval(Balllin, 1);
}