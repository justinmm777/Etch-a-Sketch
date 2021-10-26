let rowNum = 16;
let columnNum = 16;


const container = document.getElementById("container");

for (let i = 0; i < rowNum; i++){
        const rowDiv = document.createElement("div");
        rowDiv.className = "rowBox";
        container.appendChild(rowDiv);
        for (let j = 0; j < columnNum; j++) {
            const columnDiv = document.createElement("div");
            columnDiv.className = "columnBox";
            rowDiv.appendChild(columnDiv);
        }
}
