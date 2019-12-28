// change the resolution by picking the value cf: addingFeature.changeTheResolution.js
// and reseting it
function changeTheResolutionEvent(){
    a = changeTheResolution.value().split('x');
    WIDTH = parseInt(a[0],10);
    HEIGHT = parseInt(a[1],10);

    col = WIDTH/resolution;
    row = HEIGHT/resolution;

    clearTheGrid();
    replaceAllTheElements();
    resizeCanvas(WIDTH, HEIGHT);
}

// Where to place all the elements when the resolution changes
function replaceAllTheElements(){
    size = myElements.length;
    title.position(canvas.position().x+WIDTH/2-100, (canvas.position().y)-60);

    for(i =0;i<size;i++){
         p= myElements[i];
        p.position(WIDTH+20, p.y);
    }
}
