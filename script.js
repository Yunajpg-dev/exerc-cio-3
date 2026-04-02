function calculate() {
    const firstValue = document.getElementById("first-number").value.trim();
    const secondValue = document.getElementById("second-number").value.trim();
    const operator = document.getElementById("operator").value.trim();
    const result = document.getElementById("result");

    if (firstValue === "" || secondValue === "") {
        result.textContent = "Digite dois numeros";
        return;
    }

    const firstNumber = Number(firstValue);
    const secondNumber = Number(secondValue);

    let total;

    switch (operator) {
        case "+":
            total = firstNumber + secondNumber;
            break;
        case "-":
            total = firstNumber - secondNumber;
            break;
        case "*":
            total = firstNumber * secondNumber;
            break;
        case "/":
            if (secondNumber === 0) {
                result.textContent = "Nao e possivel dividir por zero";
                return;
            }
            total = firstNumber / secondNumber;
            break;
        default:
            result.textContent = "Use +, -, * ou /";
            return;
    }

    result.textContent = total;
}

function clearDisplay() {
    document.getElementById("first-number").value = "";
    document.getElementById("operator").value = "+";
    document.getElementById("second-number").value = "";
    document.getElementById("result").textContent = "";
}
