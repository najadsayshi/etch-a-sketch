console.log("hello world");



// default grid size 
let gridSize =16;
buildContainer(gridSize);

// select every cells with class cell and give event listener of hover to each using for each
function hover(){
const cells = document.querySelectorAll(".cell");

cells.forEach(cell =>{
cell.addEventListener("mouseover",()=>{
    cell.style.backgroundColor= getRandomColor();
})

})}

// button function for grid size
const button = document.querySelector(".button");

button.addEventListener("click",getGridSizeFromUser);

function getGridSizeFromUser(){
    let gridSize = Number(prompt("Enter the size of square Grid"));
    if (gridSize>=100|| Number.isNaN(gridSize)){
        alert("Sorry,Enter a value below 100 or Check if the value is a number and not a string");
    }
    else{
    buildContainer(gridSize);}
}



// building the container
function buildContainer(gridSize){
    const container = document.querySelector(".container");
    container.innerHTML=''
    for(let row=0;row<gridSize;row++){
        console.log(gridSize);
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");

        for (let col=0;col<gridSize;col++){
            const cell = document.createElement("div");
            cell.classList.add("cell");
            rowDiv.appendChild(cell);
        }
        container.appendChild(rowDiv);
    }
    hover();    
}
// Assigns a random background color to a cell when hovered


// Generates and returns a random color

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}
