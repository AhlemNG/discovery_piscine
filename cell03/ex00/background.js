
var button = document.getElementById("changeColorButton");
var fontSize = 16;


document.getElementById("changeColorButton").addEventListener("click", function() {
    var randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    fontSize *=2;
    button.style.fontSize = fontSize + "px"
});

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
