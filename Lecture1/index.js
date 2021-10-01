var prompt = require('prompt-sync')();

function row_check(player, board) {
    let sign = player.sign;
    if(board[0][0] == sign && board[0][1] == sign && board[0][2] == sign) {
        return true;
    } else if (board[1][0] == sign && board[1][1] == sign && board[1][2] == sign) {
        return true;
    } else if (board[2][0] == sign && board[2][1] == sign && board[2][2] == sign) {
        return true;
    }
    return false;
}

function col_check(player, board) {
    let sign = player.sign;
    if(board[0][0] == sign && board[1][0] == sign && board[2][0] == sign) {
        return true;
    } else if(board[0][1] == sign && board[1][1] == sign && board[2][1] == sign) {
        return true;
    } else if(board[0][2] == sign && board[1][2] == sign && board[2][2] == sign) {
        return true;
    } else {
        return false;
    }
}

function dig_check(player, board) {
    let sign = player.sign;
    if(board[0][0] == sign && board[1][1] == sign && board[2][2] == sign) {
        return true;
    } else if(board[0][2] == sign && board[1][1] == sign && board[2][0] == sign) {
        return true;
    } else {
        return false;
    }
}

function display(board) {
    for(let i = 0; i <= 2; i++) {
        let str = "| " + ((board[i][0] == "") ? " " : board[i][0]) + " | " + ((board[i][1] == "") ? " " : board[i][1]) + " | " + ((board[i][2] == "") ? " " : board[i][2]) + " |";
        console.log("-------------");
        console.log(str);
    }
    console.log("-------------");
}


function play() {

    // Board Mechanism
    let board = [["", "", ""], ["", "", ""], ["", "", ""]];

    let turn = false; // false => player1 true => player2
    let counter = 0;

    display(board);
    while(counter <= 8) {
        let current_player;
        if(turn == false) {
            current_player = player1;
        } else {
            current_player = player2;
        }
        let x = Number(prompt(`Please ${current_player.name} enter the X coordinate `));
        let y = Number(prompt(`Please ${current_player.name} enter the y coordinate `));
        
        if(x >= 0 && x <= 2 && y >= 0 && y <= 2 && board[x][y] == "") {
            board[x][y] = current_player.sign;
            turn = !turn;
            counter = counter + 1;
            let row_result = row_check(current_player, board);
            let col_result = col_check(current_player, board);
            let dig_result = dig_check(current_player, board);
            if(row_result == true || col_result == true || dig_result == true) {
                // terminate the game
                display(board);
                console.log(current_player.name, " WON !!!");
                break;
            } else if(counter >= 9) {
                console.log("It's a draw !!!!!");
            }

            display(board);
        } else {
            console.log("Invalid input try again!!!")
        }
    }

}
// Greeting mechanism
console.log("Hey!! Welcome to the TIC-TAC-TOE GAME XOXOXOX");


// Player mechanism
let player1 = {name: "Sanket", sign: "O", score: 0};
let player2 = {name: "Sarthak", sign: "X", score: 0};

let num_of_games = Number(prompt("Please enter the Number of Games to be played ? "));

for(let game = 0; game < num_of_games; game++) {
    console.log("Game No. ", game+1);
    play();
}


// Game Logic