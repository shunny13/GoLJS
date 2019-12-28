//Store my basic Grid
let grid;

// colons and rows of my grid
let col;
let row;

//size of a square
let resolution = 20;

// width and height of the grid
let WIDTH =400; let HEIGHT= 400;

//the frame rate, modified by changeTheSpeed in script/addingFeature.js
let frameR = 30;


let generalHeight = 0.20*HEIGHT ; //general height to take in account when resizing
let generalWidth = WIDTH +20; // its for all the features that are add to the game

let myElements=[]; // All the objects in the canvas

let canvas;
