let grid = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

let x = 0, verify = 0, saved = 0, onePush = 0;

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
let val;

function gamer(val) {
    let index = 1;   

    for (let i = 0; i < 3; ++i) {
        for (let j = 0; j < 3; ++j) {
            if (document.getElementById(index).value == "x" || document.getElementById(index).value == "0") {
                val = document.getElementById(index).value;
            grid[i][j] = val;
          
            }
            ++index;
            
        }            
    }
    let nr = 0;
    verify = 0;
    for (let gridDirection of gridDirections) {
        if (gridDirection.every(([i, j]) => grid[i][j] === val)) {
           ++verify;
        console.log(nr);
        ++nr;
        }
    }

    if (verify > 0) {
        document.getElementById("verdict").textContent = `gamer ${val} wins`;
        return true;
    }
    return false;
  }
 gamer(0);
 gamer(x);
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
    gamer("0") = false;
    gamer("x") = false;
}    
