

let colors = ["red", "blue", "green"];

function changeColor(){
    document.getElementById("body").style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
    document.getElementById("main").style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
    
};

var song = new Audio();
song.src = 'epicMusic.mp3';
song.play();

