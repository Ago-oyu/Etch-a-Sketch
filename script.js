const div = document.createElement("div");
const container = document.querySelector('.grid-container');
let currentSize = 16;
let currentColor = 'grey'
let eraser = false

function setCanvasSize(currentSize) {
    setGridSize(currentSize);
    for (let i = 0; i < currentSize * currentSize; i++) {
        container.appendChild(div.cloneNode(true));
    }
    
    const grids = document.querySelectorAll(`.grid-container > .grid`)
    grids.forEach(grid => grid.addEventListener("mouseenter", function() {
        hoverGrid(grid); 
    }));
}

function hoverGrid(grid) {
    if (clickStatus == true) {
        grid.style.backgroundColor = currentColor;
    }
    //grid.classList.add("colored");
}

function deleteAllGrid() {
    while (container.firstChild) {
        container.firstChild.remove();
    }
}

function newCanvasSize() {
    console.log('canvasSize')
    let newSize = prompt("Canvas Size?");
    while (newSize > 100) {
        newSize = prompt("Canvas Size?");
    }
    currentSize = newSize;
    deleteAllGrid();
    setCanvasSize(currentSize);
}

function setGridSize(currentSize) {
    let gridSize = 800/currentSize;
    div.style.height = `${gridSize}px`;
    div.style.width = `${gridSize}px`;
    console.log(div.style.height)
}

function toogleEraser(){
    if (eraser == false) {
        eraser = true;
        currentColor = 'white'
    } else {
        eraser = false;
        currentColor = 'grey'
    }
    
    console.log(eraser)
}

let clickStatus = false;
window.addEventListener('mousedown', function() {clickStatus = true; console.log(clickStatus)});
window.addEventListener('mouseup', function() {clickStatus = false; console.log(clickStatus)});
div.classList.add("grid");
setGridSize(currentSize);
setCanvasSize(currentSize);
