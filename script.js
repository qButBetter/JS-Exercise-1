function run() {
    let userInput = prompt("What operation do you wish to use?").toLowerCase();
    switch (userInput) {
        case "addition":
            add();
            break;

        case "subtraction":
            subtract();
            break;

        case "multiplication":
            multiply();
            break;

        case "division":
            divide();
            break;

        default:
            document.write("Sorry, I don't recognize that operation. Goodbye :3");
    }
}

function add() {
    alert("You picked Addition!");
    let input1 = parseInt(prompt("What is your first number?"));
    let input2 = parseInt(prompt("What is your second number?"));
    let output = 0;

    output = parseFloat(input1 + input2);

    //Check if output is NaN
    if (isNaN(output)) {
        document.write("Sorry, that number isn't supported. Goodbye :3");
    }
    else {
        document.write(output);
    }
}

function subtract() {
    alert("You picked Subtraction!");
    let input1 = parseInt(prompt("What is your first number?"));
    let input2 = parseInt(prompt("What is your second number?"));
    let output = 0;

    output = parseFloat(input1 - input2);

    //Check if output is NaN
    if (isNaN(output)) {
        document.write("Sorry, that number isn't supported. Goodbye :3");
    }
    else {
        document.write(output);
    }
}

function multiply() {
    alert("You picked Multiplication!");
    let input1 = parseInt(prompt("What is your first number?"));
    let input2 = parseInt(prompt("What is your second number?"));
    let output = 0;

    output = parseFloat(input1 * input2);

    //Check if output is NaN
    if (isNaN(output)) {
        document.write("Sorry, that number isn't supported. Goodbye :3");
    }
    else {
        document.write(output);
    }
}

function divide() {
    alert("You picked Division!");
    let input1 = parseInt(prompt("What is your first number?"));
    let input2 = parseInt(prompt("What is your second number?"));
    let output = 0;

    output = parseFloat(input1 / input2);

    //Check if output is NaN
    if (isNaN(output)) {
        document.write("Sorry, that number isn't supported. Goodbye :3");
    }
    else {
        document.write(output);
    }
}