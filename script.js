console.log("hello world");

const container = document.querySelector(".container");
for( let row=0;row<16;row++){
const rowDiv = document.createElement("div");
rowDiv.classList.add("row");

    for (let col=0;col<16;col++){
        const cell = document.createElement("div");
        cell.classList.add("cell");
        rowDiv.appendChild(cell);
    }
    container.appendChild(rowDiv);
}





