const div = document.createElement("div");
const container = document.querySelector('.grid-container');


div.classList.add("grid");
for (let i = 0; i < 256; i++) {
    container.appendChild(div.cloneNode(true));
}

const grids = document.querySelectorAll(`.grid-container > .grid`)
console.log(grids)
grids.forEach(grid => grid.addEventListener("mouseover", function() {
   hoverGrid(grid); 
}));

function hoverGrid(grid) {
    console.log('click');
    grid.classList.add("colored");
}