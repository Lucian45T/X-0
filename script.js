let grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9] 
];
let y = 0, x = 0, verify = 0;

function gamerX() { 
    y = 0;
    for (let i = 0; i < 3; ++i) {
        for (let j = 0; j < 3; ++j) {
            ++y;
            console.log(y);
            if (document.getElementById(y).value == "x") {
                grid[i][j] = "x";   
           }
        }
    }
    for (let i = 0; i < 3; ++i) {
        for (let j = 0; j < 3; ++j) {
            if (i == 1 && grid[i][j] == "x" && grid[i - 1][j] == "x" && grid[i + 1][j] == "x") {
            ++verify;
            }
            if (j == 1 && grid[i][j] == "x" && grid[i][j - 1] == "x" && grid[i][j + 1] == "x") {
            ++verify;
            }
            if (j == 1 && i == 1 && grid[i][j] == "x" && grid[i - 1][j - 1] == "x" && grid[i + 1][j + 1] == "x") {
            ++verify;
            }
            if (j == 1 && i == 1 && grid[i][j] == "x" && grid[i - 1][j + 1] == "x" && grid[i + 1][j - 1] == "x") {
            ++verify;
            }
        }
    }    
    if(verify > 0) {
        document.getElementById("verdict").textContent = "gamer with X win";
    }    
}

function gamer0() {
    y = 0;
    for (let i = 0; i < 3; ++i) {
        for (let j = 0; j < 3; ++j) {
            ++y;
            if (document.getElementById(y).value == "0") {
                grid[i][j] = "0";   
           }
        }
    }
    for (let i = 0; i < 3; ++i) {
        for (let j = 0; j < 3; ++j) {
            if (i == 1 && grid[i][j] == "0" && grid[i - 1][j] == "0" && grid[i + 1][j] == "0") {
            ++verify;
            }
            if (j == 1 && grid[i][j] == "0" && grid[i][j - 1] == "0" && grid[i][j + 1] == "0") {
            ++verify;
            }
            if (j == 1 && i == 1 && grid[i][j] == "0" && grid[i - 1][j - 1] == "0" && grid[i + 1][j + 1] == "0") {
            ++verify;
            }
            if (j == 1 && i == 1 && grid[i][j] == "0" && grid[i - 1][j + 1] == "0" && grid[i + 1][j - 1] == "0") {
            ++verify;
            }
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
            document.getElementById(x).value = " ";
        }
    }
}
