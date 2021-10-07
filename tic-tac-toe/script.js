'use strict'

let currentTurn = 'X';
const cells = document.getElementsByClassName('cell');
const resetButton = document.getElementsByClassName('game--restart')[0];
let statusTitle = document.getElementsByClassName('game--status')[0];

const changeTurn = () =>{
    if(currentTurn === 'X')
        currentTurn = 'O';
    else
        currentTurn = 'X';
}

const fillStatusTilte = () =>{
    if(currentTurn === 'X')
        statusTitle.innerHTML = "It's X's turn";
    else
        statusTitle.innerHTML = "It's O's turn";
}

const fillCell = (event) => {
    let currentCell =  event.target;
    currentCell.innerHTML = currentTurn;
    changeTurn();
    fillStatusTilte();
}

const reset = () => {
    for (const cell of cells) {
        cell.innerHTML = '';
    }
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