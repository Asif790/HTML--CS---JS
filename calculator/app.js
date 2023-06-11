let firstNumber = 10
let secondNumber = 5
document.getElementById("firstInput").innerText = firstNumber ;
document.getElementById("secondInput").innerText = secondNumber;
let answer = document.getElementById("answer")
function Sum(){
    console.log(firstNumber + secondNumber)
    let sum = firstNumber + secondNumber;
    answer.innerText = "THE ANSWER IS:" + sum
}

function Difference(){
    console.log(firstNumber - secondNumber)
    let sub = firstNumber - secondNumber;
    answer.innerText = "THE ANSWER IS:" + sub
}

function Multiple(){
    console.log(firstNumber * secondNumber)
    let mul = firstNumber * secondNumber;
    answer.innerText = "THE ANSWER IS:" + mul
}

function Divide(){
    console.log(firstNumber / secondNumber)
    let divi = firstNumber / secondNumber;
    answer.innerText = "THE ANSWER IS:" + divi
}