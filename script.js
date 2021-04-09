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

            //check if is exeded the display digits
            if (displayValue && String(displayValue).split("").length > 12) { return }
            //chek if period is already in the display
            if (key === ".") {
                if (String(displayValue).indexOf(".") !== -1) { return }
            }

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
            if (key === "=" && operator) {
                numA = operate(operator, parseFloat(numA), parseFloat(numB))
                displayValue = numA;
                operator = "";

            }

            display.textContent = normalizeOut(displayValue);

            break;

        case "oper":
            if (displayValue) {

                if (operator) {
                    console.log(operator, numA, numB);
                    numA = operate(operator, parseFloat(numA), parseFloat(numB))
                    displayValue = numA;
                    display.textContent = normalizeOut(displayValue);
                    displayValue = "";
                    operator = key

                } else {
                    operator = key
                    displayValue = "";
                }

            }
            break;

        default:
            break;
    }


}

function normalizeOut(number) {
    //check if is exeded the display max digits
    if (String(number).split("").length > 12) {
        if (String(number).indexOf(".")) {
            if (String(number).indexOf("e")) {
                return "OUT OF RANGE";
            }
            number = number.toFixed(2);
            number = String(number).slice(0, 13);
        }
    }
    return number;
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
    divide: function (a, b) { return (a / b).toFixed(2) }
}

