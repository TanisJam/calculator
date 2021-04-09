//golval varibles
let displayValue;
let operator;
let numA;
let numB;

//references
let numpad = document.querySelector(".numpad");
numpad.addEventListener("click", changeDisplay)

let display = document.querySelector("#screen");
//display.textContent = displayValue;



function changeDisplay(parameter) {
    //if click other than a key, return
    if (!parameter.target.id) { return };
    let type = parameter.target.getAttribute("type");
    let key = parameter.target.id;

    switch (type) {
        case "number":
            if (!operator) {
                numA = display.textContent + key;
                displayValue = numA;
                display.textContent = displayValue;

            } else {
                numB = displayValue + key;
                displayValue = numB
                display.textContent = displayValue;
            }

            break;

        case "mod":
            if (key === "AC") { displayValue = "" }
            if (key === "DEL") { displayValue = display.textContent.split("").slice(0, -1).join("") }
            if (key === "=") {
                console.log(operator, numA, numB);
                numA = operate(operator, numA, numB)
                displayValue = numA;
                operator = "";
            }
            display.textContent = displayValue;

            break;

        case "oper":
            if (displayValue) {
                if (key === "-1") {
                    displayValue = display.textContent * -1
                    display.textContent = displayValue;
                } else {
                    operator = key

                    displayValue = "";
                }

            }

            //display.textContent = displayValue;


            break;

        default:
            break;
    }

    //display.textContent = displayValue;

}



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
            if (b === 0) { return "we can't divide by 0" }
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

