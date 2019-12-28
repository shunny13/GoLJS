function setup() {
    canvas = createCanvas(WIDTH,HEIGHT);
    canvas.position(canvas.position().x, canvas.position().y+50);
    col = WIDTH/resolution;
    row = HEIGHT/resolution;
    grid = makeTheArray(col,row);
    clearTheGrid();
    addingAllTheFeatures();
}


function draw() {
    background(0);
    frameRate(frameR);
    drawMyActualGrid();
    isThereAutomation();

}
