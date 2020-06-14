let colors = ["red", "blue", "green"];

function changeColor(){
    document.getElementById("body").style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
};


