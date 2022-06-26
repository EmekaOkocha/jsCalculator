import { createInterface } from 'readline';

var selectOperator = createInterface(
     process.stdin, process.stdout);

     var selectOperator = readline.createInterface(process.stdin, process.stdout);
     selectOperator.question("choose the nuumber corresponding to the arithmetic operation you want to perform.(1 for +; 2 for - ; 3 for * ; 4 for /) ", function(answer) {
     // ask a question to interact with user.

          // close the program
          selectOperator.close();
     });
function addition(firstval , secondval){
    result= firstval + secondval;
    return result;
}
function subtract(firstval , secondval){
    result = firstval - secondval;
    return result;
}
function multiply(firstval , secondval){
    result = firstval * secondval;
    return result;

}
function divide(numerator , denominator){
    result = numerator / denominator;
    return result;
}
switch(selectOperator){
    case "1": addition(firstval,secondval)
    break;
    case "2": subtract(firstval , secondval)
    break;
    case "3": multiply(firstval , secondval)
    break;
    case "4": divide(numerator , denominator)
    break;
    default:
    console.log("choose a right value for your arithmetic expression");
}