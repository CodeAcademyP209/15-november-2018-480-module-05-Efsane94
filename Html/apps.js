// var numSquares = 6;
// var colors = [];
// var pickedColor;
// var squares = document.querySelectorAll(".square");
// var resetButton = document.querySelector("#reset");
// var modeButtons = document.querySelectorAll(".mode");

var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 0, 255)",
    "rgb(255, 225, 0)",
    "rgb(255, 0, 255)",
    "rgb(0, 255, 255)",
    "rgb(0, 255, 0)"
];
var squares = document.querySelectorAll(".square");
for (let i=0; i<squares.length; i++) {
squares.style.background = colors[i]
}


for(let i=0; i<= squares.length; i++) {
  squares[i].addEventListeners('click', function() {
    alert('option was clicked');
  });
}

for(i=0; i<= squares.length; i++) {
  squares[i].addeventListeners('click', function() {
    //if correct block is clicked do something....
    //if wrong block is clicked do something....
  });
}