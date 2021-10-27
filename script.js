let rowNum;
let columnNum;

const container = document.getElementById('container');

function makeGrid(rowNum, columnNum) {
    for (let i = 0; i < rowNum; i++){
            const rowDiv = document.createElement('div');
            rowDiv.className = 'rowBox';
            container.appendChild(rowDiv);
            for (let j = 0; j < columnNum; j++) {
                const columnDiv = document.createElement('div');
                columnDiv.className = 'columnBox';
                rowDiv.appendChild(columnDiv);
            }
    }
}

window.onload = makeGrid(16, 16);

// gird color to black
function gridBlack(){
    document.querySelectorAll('.columnBox').forEach(item => {
        item.addEventListener('mouseenter', event => {
            item.style.backgroundColor = 'black'; 
        })
    })
}
gridBlack();

// Generate random color
function gridRandomColor(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.querySelectorAll('.columnBox').forEach(item => {
        item.addEventListener('mouseenter', event =>{
            item.style.backgroundColor = "#" + randomColor;
        })
    })
}

const color = document.getElementById('btnColor');
color.addEventListener('click', event => {
    gridRandomColor();
})



// Event listener for clear button and getting user input
const clear = document.getElementById('btnClear');

clear.addEventListener('click', event => {
    let num;
    do {
        num = Number(window.prompt("Enter number of squres"));
    } while( num > 100 || num < 1)
    columnNum = num;
    rowNum = num;
    
    document.querySelectorAll('.columnBox').forEach(item => {
        item.style.backgroundColor = 'white';
        item.style.border = 'white';

    document.querySelectorAll('.rowBox').forEach(item => {
        item.remove();
    })
    
    })
    makeGrid(rowNum, columnNum);
    gridBlack();
});


// Show grid
const btnGrid = document.getElementById('btnGrid');

btnGrid.addEventListener('click', myGrid);

function myGrid() {
    document.querySelectorAll('.columnBox').forEach(item => {
        item.style.border = '1px solid green';
        // '1px solid #f9fbfd'
    })
    
}


