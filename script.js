const div = document.createElement("div");
const container = document.querySelector('.grid-container');

div.classList.add("grid");
for (let i = 0; i < 3; i++) {
    container.appendChild(div.cloneNode(true));
}
