$(document).ready(readyNow);

function readyNow() {
    console.log('document ready');
    eventHandlers();
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
    let calculationToSend = { valOne: firstInput, valTwo: secondInput }
    $.ajax({
        type: 'POST',
        data: calculationToSend,
        url: '/calc'
    }).done(function (response) {
        console.log('SUCCESS!');
    });

    }

function add() {
    operator = '+'
    console.log(operator);
}
function subtract() {
    operator = '-'   
    console.log(operator);
}
function multiply() {
    operator = '*'
    console.log(operator);
}
function divide() {
    operator = '/'
    console.log(operator);
}