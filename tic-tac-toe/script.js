'use strict'

let currentTurn = 'X';
const cells = document.getElementsByClassName('cell');
const resetButton = document.getElementsByClassName('game--restart')[0];
let statusTitle = document.getElementsByClassName('game--status')[0];
let state = initStates();
let finish = false;
let title = '';

function initStates (){
    let state = ['', '', '', '', '', '', '', '', ''];
    return state;
}

function isFinish(){
    for(let i = 0 ; i < 9 ; i += 3){
        if(state[i] == state[1 + i] && state[1 + i] == state[2 + i] && state[i] != ''){
            title = 'Player ' + state[i] + ' has won'
            return true;
        }
    }
    for(let i = 0 ; i < 3 ; i ++){
        if(state[i] == state[3 + i] && state[i] == state[6 + i] && state[i] != ''){
            title = 'Player ' + state[i] + ' has won'
            return true;
        }
    }

    if(state[0] == state[4] && state[4] == state[8] && state[0] != ''){
        title = 'Player ' + state[0] + ' has won'
        return true;
    }

    if(state[2] == state[4] && state[4] == state[6] && state[2] != ''){
        title = 'Player ' + state[2] + ' has won'
        return true;
    }
    let count = 0;
    for(let i = 0 ; i < 9 ; i++){
        if(state[i] != '')
            count++;
    }
    if(count == 9){
        title = 'Game ended in a draw';
        return true;
    }
    return false;
}

const changeTurn = () =>{
    if(currentTurn === 'X')
        currentTurn = 'O';
    else
        currentTurn = 'X';
    finish = isFinish();
}

const fillStatusTilte = () =>{
    if(finish){
        statusTitle.innerHTML = title;
    }
    else if(currentTurn === 'X')
        statusTitle.innerHTML = "It's X's turn";
    else
        statusTitle.innerHTML = "It's O's turn";
}

const fillCell = (event) => {
    let currentCell =  event.target;
    let index =currentCell.getAttribute('data-cell-index');
    if(state[index] == '' && !finish){
        state[index] = currentTurn;
        currentCell.innerHTML = currentTurn;
        changeTurn();
        fillStatusTilte();
    }
}

const reset = () => {
    for (const cell of cells) {
        cell.innerHTML = '';
    }
    currentTurn = 'X';
    finish = false;
    fillStatusTilte();
    state = initStates();
}

const eventHandler = () => {
    for (const cell of cells) {
        cell.addEventListener('click', fillCell);
    }
    resetButton.addEventListener('click', reset);
}

const init = () => {
    eventHandler();
    fillStatusTilte();
}
init();