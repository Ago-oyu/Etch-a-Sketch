const div = document.createElement("div");
const container = document.querySelector('.grid-container');
let currentSize = 16;

div.classList.add("grid");

function setCanvasSize(currentSize) {
    for (let i = 0; i < currentSize * currentSize; i++) {
        container.appendChild(div.cloneNode(true));
    }
    const grids = document.querySelectorAll(`.grid-container > .grid`)
    grids.forEach(grid => grid.addEventListener("mouseenter", function() {
        hoverGrid(grid); 
    }));
}
setCanvasSize(currentSize);



function hoverGrid(grid) {
    console.log('click');
    grid.classList.add("colored");
}

function deleteAllGrid() {
    while (container.firstChild) {
        container.firstChild.remove();
    }
}

function newCanvasSize() {
    console.log('canvasSize')
    let newSize = prompt("Canvas Size?");
    currentSize = newSize;
    deleteAllGrid();
    setCanvasSize(currentSize);
}

