const div = document.createElement("div");
const container = document.querySelector('.grid-container');


div.classList.add("grid");
for (let i = 0; i < 256; i++) {
    container.appendChild(div.cloneNode(true));
}

const grid = document.querySelectorAll(`.grid-container > .grid`)
console.log(grid)