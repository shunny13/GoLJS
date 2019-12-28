function makeTheArray(col, row){
    arr = new Array(col);
    for(i = 0; i<arr.length;i++){
        arr[i] = new Array(row);
    }
    return arr;
}

let grid;
let col;
let row;
let resolution = 20;
let WIDTH =1000; let HEIGHT= 800;

function setup() {
    createCanvas(WIDTH,HEIGHT);
    col = width/resolution;
    row = height/resolution;

    grid = makeTheArray(col,row);
    clearTheGrid();


    button = createButton('Next Generation');
    button.mousePressed(makeAStep);
    button.position(1020,105);

    button = createButton('Random generation');
    button.mousePressed(makeARandomSample);
    button.position(1020,130);

    button = createButton('Clear');
    button.mousePressed(clearTheGrid);
    button.position(1020,155);

    greeting = createElement('h2', 'Speed');
    greeting.position(1020, 170);
    input = createInput('30');
    input.position(1020, 225);


    auto = createElement('h2', 'Automatic');
    auto.position(1020, 250);
    radio = createRadio();
    radio.option('Yes');
    radio.option('No');
    radio.position(1020, 300);
}

function drawBasicGrid(){

    for(i =0;i<col;i++){
        for(j=0;j<row;j++){
            x = i *resolution;
            y = j * resolution;
            if(grid[i][j]==1){
                fill(255);
                stroke(1);
                rect(x,y,resolution,resolution);
            }
        }
    }
}

/** Functions for the grid **/
function clearTheGrid(){
    grid = makeTheArray(col,row);
    for(i =0;i<col;i++){
        for(j=0;j<row;j++){
            grid[i][j] = 0;
        }
    }
}

function makeARandomSample(){
    grid = makeTheArray(col,row);
    for(i =0;i<col;i++){
        for(j=0;j<row;j++){
            grid[i][j] = floor(random(2));
        }
    }
}

function makeAStep(){
    let nextGen = makeTheArray(col, row);
    for(i =0;i<col;i++){
        for(j=0;j<row;j++){

            let state = grid[i][j];
            let voisin = countVoisin(grid, i ,j);

            if(state == 0 && voisin ==3){
                nextGen[i][j] = 1;
            }else if(state ==1 && (voisin <2 || voisin >3)){
                nextGen[i][j] = 0;
            }else{
                nextGen[i][j] = state;
            }

        }
    }
    grid = nextGen;

}
/**  --- */
function draw() {
    background(0);
    frameRate(30);
    drawBasicGrid();
    //makeAStep();
    let val = radio.value();
    if(val == "Yes"){
        makeAStep();
    }



}

function mouseDragged(){
    colorACell(mouseX,mouseY);
}

function colorACell(mouseX,mouseY){
    x = floor((mouseX/WIDTH*WIDTH)/resolution);
    y = floor((mouseY/HEIGHT*HEIGHT)/resolution);

    if(mouseX > 0 && mouseX<WIDTH && mouseY>0 && mouseY<HEIGHT ){

        if(grid[x][y] == 1){
            grid[x][y] =0;
        }else{
            grid[x][y]=1;
        }
    }else{
        //console.log((y));

    }

}

function countVoisin(grid, x ,y){
    let sum = 0;
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        let c = (x + i + col) % col;
        let r = (y + j + row) % row;
        sum += grid[c][r];
      }
    }
    sum -= grid[x][y];
    return sum;
  }

/*
sum+=grid[i-1][j];
sum+=grid[i-1][j-1];
sum+=grid[i][j-1];
sum+=grid[i+1][j-1];
sum+=grid[i+1][j];
sum+=grid[i+1][j+1];
sum+=grid[i][j+1];
sum+=grid[i-1][j+1];
*/
