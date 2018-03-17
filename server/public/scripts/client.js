$(document).ready(readyNow);

function readyNow() {
    console.log('document ready');
    eventHandlers();
    getHistory();
}
function eventHandlers() {
    $('#addButton').on('click', add)
    $('#subButton').on('click', subtract)
    $('#multButton').on('click', multiply)
    $('#divButton').on('click', divide)
    $('#equalButton').on('click', userInput)
}
let operator = 0;

function userInput() {
    let firstInput = $('#firstValue').val();
    let secondInput = $('#secondValue').val();
    let calculationToSend = { valOne: firstInput, valTwo: secondInput, operation: operator}
    $.ajax({
        type: 'POST',
        data: calculationToSend,
        url: '/calc'
    }).done(function (response) {
        console.log('SUCCESS!');
    });

    }
// operator functions
function add() {
    operator = '+'
}
function subtract() {
    operator = '-'   
}
function multiply() {
    operator = '*'
}
function divide() {
    operator = '/'
}
// append to dom functions
function getHistory() {
    $.ajax({
        type: 'GET',
        url: '/calc'
    }).done(function(response){
        appendToDom(response);
    });
}

function appendToDom(calcHistory) {
    $('#calcTable').empty()
    for (let equation of calcHistory)
      let tr = $('<tr></tr>');

}