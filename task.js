/*1) С помощью prompt спрашиваем у пользователя действие.
2) С помощью prompt спрашиваем у пользователя числа. Числа вводяться через пробел.
3) Выполняем то действие, которое выбрал пользователь со всеми числами.
Если ввёл действие которого нет (не +, -, *, /) то выводим соответсвующее сообщение и не выполняем код дальше.
Удаляем все значения, которые не являются числами.
т.е. если пользователь ввел "1 ыва 2 56", то калькуляцию мы должны провести тольк с 1 2 56 */


const operator = prompt("Enter operation");

const numbers = (prompt("Enter values"));
const array = numbers.split(" ");

const onlyNumbers = array.filter(function(elem) {
if (elem >= 0) {
return true;
} else {
return false;
}
});

function sum() {
    const sumOfElements = onlyNumbers.reduce((accumulator, currentValue) =>
    Number(accumulator) + Number(currentValue)
    );
    console.log(sumOfElements);
}

function subtract() {
    const subtractionOfElements = onlyNumbers.reduce((accumulator, currentValue) =>
    Number(accumulator) - Number(currentValue)
    );
    console.log(subtractionOfElements);
}

function multiply() {
    const multiplicationOfElements = onlyNumbers.reduce((accumulator, currentValue) =>
    Number(accumulator) * Number(currentValue)
    );
    console.log(multiplicationOfElements);
}

function divide() {
    const divisionOfElements = onlyNumbers.reduce((accumulator, currentValue) =>
    Number(accumulator) / Number(currentValue)
    );
    console.log(divisionOfElements);
}

switch (operator) {
  case '+':  
    sum();
    break;

  case '-':  
    subtract();
    break;

  case '*':  
    multiply();
    break;

  case '/':  
    divide();
    break;

  default:
    console.log (`Operation with ${operator} could not be done`);
}