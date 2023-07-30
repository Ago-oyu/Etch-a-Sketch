const div = document.createElement("div");
const container = document.querySelector('.grid-container');
let color = document.getElementById('main-color');
let currentSize = 16;
let currentColor = color.value
let eraser = false

function setCanvasSize(currentSize) {
    setGridSize(currentSize);
    for (let i = 0; i < currentSize * currentSize; i++) {
        container.appendChild(div.cloneNode(true));
    }
    
    const grids = document.querySelectorAll(`.grid-container > .grid`)
    grids.forEach(grid => grid.addEventListener("mouseover", function() {
        hoverGrid(grid); 
    }));
}

function hoverGrid(grid) {
    if (clickStatus == true) {
        grid.style.backgroundColor = `${currentColor}`;
    } else {
        grid.onmousedown = function() {grid.style.backgroundColor = `${currentColor}`}
    }
    //grid.classList.add("colored");
}

function deleteAllGrid() {
    while (container.firstChild) {
        container.firstChild.remove();
    }
}

function newCanvasSize() {
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
        currentColor = '';
    } else {
        eraser = false;
        currentColor = color.value;
    }
}

//console.log(color.value)
let clickStatus = false;
container.addEventListener('mousedown', function() {clickStatus = true; console.log(clickStatus)});
document.addEventListener('mouseup', function() {clickStatus = false; console.log(clickStatus)});
color.addEventListener('change', (event) => {
    currentColor = color.value;
    console.log(currentColor);
})
div.classList.add("grid");
setGridSize(currentSize);
setCanvasSize(currentSize);
