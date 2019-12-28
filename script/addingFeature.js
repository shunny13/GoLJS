function addingAllTheFeatures(){

    /** Add the title */
    addTheTitle();

    /** Add a button to choose the next step */
    aButtonToMannualyGoToTheNextStep();

    // Add a random grid
    generateARandomGrid();

    //Clear my actual grid
    clearTheGridOfTheGame();

    //Change the speed of the game
    changingTheGameSpeed();

    //Make the game play itself by automating it
    automateTheProcess();

    //Change the resolution of the game
    changeResolution();

}

function addTheTitle(){
    title = createElement('h1', 'Game Of Life');
    title.position(canvas.position().x+WIDTH/2-100, (canvas.position().y)-60);
}


function changeTheSpeed(){
    i = parseInt(speed.value(),10);
    if (Number.isInteger(i))
        frameR =i;
}

function isThereAutomation(){
    let val = radio.value();
    if(val == "Yes"){
        makeAStep();
    }
}

function changeResolution(){
    changeTheResolution = createSelect();
    changeTheResolution.position(generalWidth, generalHeight +220);
    changeTheResolution.option('400x400');
    changeTheResolution.option('800x600');
    changeTheResolution.option('1200x800');
    changeTheResolution.changed(changeTheResolutionEvent);
    myElements.push(changeTheResolution);
}

function automateTheProcess(){
    auto = createElement('h2', 'Automatic');
    auto.position(generalWidth, generalHeight+150);
    myElements.push(auto);

    radio = createRadio();
    radio.option('Yes');
    radio.option('No');
    radio.position(generalWidth, generalHeight+200);
    myElements.push(radio);
}

function changingTheGameSpeed(){
    greeting = createElement('h2', 'Speed');
    greeting.position(generalWidth, generalHeight+70);
    myElements.push(greeting);

    speed = createInput('30');
    speed.position(generalWidth, generalHeight+125);
    myElements.push(speed);

    button = createButton('Ok');
    button.mousePressed(changeTheSpeed);
    button.position(generalWidth,generalHeight+145);
    myElements.push(button);
}

function clearTheGridOfTheGame(){
    button = createButton('Clear');
    button.mousePressed(clearTheGrid);
    button.position(generalWidth,generalHeight+60);
    myElements.push(button);
}

function generateARandomGrid(){
    button = createButton('Random generation');
    button.mousePressed(makeARandomSample);
    button.position(width+20,generalHeight+30);
    myElements.push(button);
}

function aButtonToMannualyGoToTheNextStep(){
    button = createButton('Next Generation');
    button.mousePressed(makeAStep);
    button.position(width+20,generalHeight);
    myElements.push(button);
}
