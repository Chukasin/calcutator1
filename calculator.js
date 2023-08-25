let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let answer = document.getElementById("answer")
let addbutton = document.getElementById("add")
let subtractbutton = document.getElementById("subtract")
let multiplybutton = document.getElementById("multiply")
let dividebutton = document.getElementById("divide")
let operator = document.getElementById("operator")
let clearButton = document.getElementById("clear")

addbutton.onclick = function(){
    let addition = parseInt(num1.value) + parseInt(num2.value)
    answer.value = addition
    operator.innerHTML = "+"
}
//Button that subtract numbers
subtractbutton.onclick = function(){
    let subtraction = parseInt(num1.value) - parseInt(num2.value)
    answer.value = subtraction
    operator.innerHTML = "-"
}


//Button that multiply numbers
multiplybutton.onclick = function(){
    let multiplication = parseInt(num1.value) * parseInt(num2.value)
    answer.value = multiplication
    operator.innerHTML = "x"
}


//Button that multiply numbers
dividebutton.onclick = function(){
    let division = parseInt(num1.value) / parseInt(num2.value)
    answer.value = division
    operator.innerHTML = "/"
}


//Button that clears input
clearButton.onclick = function(){
    num1.value=""
    num2.value=""
    answer.value=""
    operator.innerHTML =""
}