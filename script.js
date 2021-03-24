

function operate(operator, a, b) {
    switch (operator) {
        case "+":
            return operations.add(a, b)
            break;

        case "-":
            return operations.subtract(a, b)
            break;

        case "*":
            return operations.multiply(a, b)
            break;

        case "/":
            if ( b === 0){return "we can't divide by 0"}
            return operations.divide(a, b)
            break;

        default:
            return "Operator error";
            break;
    }
}



//obeject with funtions for all the basic math operators
const operations = {
    add: function (a, b) { return (a + b) },
    subtract: function (a, b) { return (a - b) },
    multiply: function (a, b) { return (a * b) },
    divide: function (a, b) { return (a / b) }
}

