let btn = document.getElementById("button");
let box = document.getElementById("canvas");
btn.addEventListener("click",convert);



function convert() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for(var i=0;i<6;i++){
        var r = Math.floor(Math.random()*16);
        color = color+letters[r]
    }
    box.style.background = color;
}

