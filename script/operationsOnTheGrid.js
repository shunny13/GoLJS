//Put all the squares at 0

function clearTheGrid(){
    grid = makeTheArray(col,row);
    for(i =0;i<col;i++){
        for(j=0;j<row;j++){
            grid[i][j] = 0;
        }
    }
}

// Create a random grid
function makeARandomSample(){
    grid = makeTheArray(col,row);
    for(i =0;i<col;i++){
        for(j=0;j<row;j++){
            grid[i][j] = floor(random(2));
        }
    }
}

//Drawing the grid at an instant T
function drawMyActualGrid(){
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

/*----------------------------------------*/
//The basic step where we go from genreation n to generation n+1
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
    // the grid will now become the grid that was modified
    grid = nextGen;
}


// Count the neighbors with a wrap around
function countVoisin(grid, x ,y){
    let sum = 0;
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        let c = (x + i + col) % col;
        let r = (y + j + row) % row;
        sum += grid[c][r];
      }
    }
    // substract itself
    sum -= grid[x][y];
    return sum;
  }


  //Constructs the array to store the values
  function makeTheArray(col, row){
      arr = new Array(col);
      for(i = 0; i<arr.length;i++){
          arr[i] = new Array(row);
      }
      return arr;
  }
  /*----------------------------------------*/
