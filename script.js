function add(a,b) {
    return a+b
}

function subtract(a,b) {
    return a-b
}

function multiply(a,b) {
    return a*b
}

function divide(a,b) {
    return a/b
}

function operate(a, oper, b) {
    if (oper === "+") {
        return add(a,b)
    }
    if (oper === "-") {
        return subtract(a,b)
    }
    if (oper === "*") {
        return multiply(a,b)
    }
    if (oper === "/") {
        return divide(a,b)
    }
}

console.log(add(10,90))
console.log(subtract(10,90))
console.log(multiply(10,90))
console.log(divide(10,90))
console.log(operate(400, '*', 144))