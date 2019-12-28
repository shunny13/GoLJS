//Color squares by grabbing mouse

function mouseDragged(){
    colorACell(mouseX,mouseY);
}

//Color by clicking
function mousePressed(){
    colorACell(mouseX,mouseY);
}

// Makes sure to color only if inside the grid
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
