let grid = [    
    [1, 2, 3],
    [4, 5, 6],    
    [7, 8, 9]
];

let y = 0, x = 0, verify = 0, saved = 0, onePush = 0, check = 0;

function generateGrid() {
    if (onePush == 0) {
        for (let i = 0; i < 3; ++i) {
            for (let j = 0; j < 3; ++j) {
                ++saved;
                document.getElementById("container").innerHTML += `
                <input type="text" id="${saved}" style="width: 50px; height: 50px;
                 background-color: rgba(0, 255, 68, 0.1)">`;
            }
            document.getElementById("container").innerHTML += `<br>`;
        }
        ++onePush;
    }
}

let gridDirections = [
    [[0, 2], [1, 2], [2, 2]],
    [[0, 0], [1, 0], [2, 0]],
    [[0, 0], [0, 1], [0, 2]],
    [[2, 0], [2, 1], [2, 2]],
    [[0, 1], [1, 1], [2, 1]],
    [[1, 0], [1, 1], [1, 2]],
    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]]
];
          
function gamerX() { 
    verify = 0; 
    y = 0;
    for (let i = 0; i < 3; ++i) {
        for (let j = 0; j < 3; ++j) {
            ++y;
            if (document.getElementById(y).value == "x") {
                grid[i][j] = "x";    
            }
        }
    }

    for (let gridDirection of gridDirections) {
        if (gridDirection.every(([i, j]) =>grid[i][j] === "x")) {
            verify++; 
        }
    }
    
    if(verify > 0) {  
        document.getElementById("verdict").textContent = "gamer with X win";
    }   
}

function gamer0() {
    verify = 0;
    y = 0;
    for (let i = 0; i < 3; ++i) {
        for (let j = 0; j < 3; ++j) {
            ++y;
            if (document.getElementById(y).value == "0") {
                grid[i][j] = "0";   
            }
        }
    }
     for (let gridDirection of gridDirections) {
        if (gridDirection.every(([i, j]) =>grid[i][j] === "0")) {
            verify++; 
        }
    }
    
    if(verify > 0) {
        document.getElementById("verdict").textContent = "gamer with 0 win";
    }   
}

function reset() {
    x = 0; 
    for (let i = 0; i < 3; ++i) {
        for (let j = 0; j < 3; ++j) {
            ++x;
            document.getElementById(x).value = "";
            grid[i][j] = "";
        }
    }
    document.getElementById("verdict").textContent = "who will win?";
    verify = 0;
   
}
            
