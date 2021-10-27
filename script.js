let rowNum = 16;
let columnNum = 16;
let num = 0;


const container = document.getElementById('container');

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

document.querySelectorAll('.columnBox').forEach(item => {
    item.addEventListener('mouseenter', event => {
        item.style. backgroundColor = 'black' 
    })
})

// Event listener for clear button
const clear = document.getElementById('btnClear');

clear.addEventListener('click', event => {
    document.querySelectorAll('.columnBox').forEach(item => {
        item.style.backgroundColor = 'white';
        item.style.border = 'white';
    })
});


// Show grid
const btnGrid = document.getElementById('btnGrid');

btnGrid.addEventListener('click', myGrid);

function myGrid() {
    document.querySelectorAll('.columnBox').forEach(item => {
        item.style.border = '1px solid #f9fbfd';
    })
    
}