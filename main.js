var audio = new Audio("epicMusic.mp3");

audio.play();

let colors = ["red", "blue", "green"];

function changeColor(){
    document.getElementById("body").style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
    document.getElementById("main").style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
    
};


