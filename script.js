function makeGrid(){
    let container = document.getElementById('container');

    for(let i=0;i<11;i++){
        let myRow = document.createElement("tr")
        myRow.id = "row" + i;

        container.appendChild(myRow);
        let rowNum = document.getElementById("row" + i);

        for(let j=0; j<11;j++){
            let myCell = document.createElement("td");
            rowNum.appendChild(myCell);
        }

    }
}

makeGrid();

