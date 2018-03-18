$(document).ready(readyNow);
// global variables
let operator = 0;
let dot = 0

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
    $('.op').on('click', opColor)
    $('#buttonTable').on('click', '.num', appendValue1)
    $('#buttonTable').on('click', '.num2', appendValue2)
}

function userInput() {
    let firstInput = $('#firstValue').val();
    let secondInput = $('#secondValue').val();
    let calculationToSend = { valOne: firstInput, valTwo: secondInput, operation: operator};
    $('.num2').toggleClass('num2 num');
    $('.op2').toggleClass('op2 op');
    $('#firstValue').val(null);
    $('#secondValue').val(null);
    $.ajax({
        type: 'POST',
        data: calculationToSend,
        url: '/calc'
    }).done(function (response) {
        console.log('SUCCESS!');
        getHistory();
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
    for (let calc of calcHistory) {
        let tr = $('<tr></tr>');
        tr.append('<td> ' + calc.valOne + ' ' + calc.operation + ' ' + calc.valTwo + ' </td>');
        $('#calcTable').append(tr);
        $('#answerField').empty();
        $('#answerField').append(calc.answer);
    }
}

function opColor() {
    $(this).toggleClass('op op2');
    $('.num').toggleClass('num num2')

}

function appendValue1() {
    if ($(this).val() === '.' && dot === 0) {
        dot++;
        $('#firstValue').val($('#firstValue').val() + $(this).val());        
    } else if ($(this).val() === '.' && dot === 1) {
        return null
    } else {        
        $('#firstValue').val($('#firstValue').val() + $(this).val());
    }
}
function appendValue2() {
    if ($(this).val() === '.' && dot === 0) {
        dot++;
        $('#secondValue').val($('#secondValue').val() + $(this).val());
    } else if ($(this).val() === '.' && dot === 1) {
        return null
    } else {
        $('#secondValue').val($('#secondValue').val() + $(this).val());
    }
}