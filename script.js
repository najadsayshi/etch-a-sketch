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


// select every cells with class cell and give event listener to each using for each
const cells = document.querySelectorAll(".cell");

cells.forEach(cell =>{
cell.addEventListener("mouseover",()=>{
    cell.style.backgroundColor= "red";
})

})

