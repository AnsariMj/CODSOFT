function valueButton(e) {
    calculator.screen.value += e.value;
}

function Clear() {
    calculator.screen.value = null;
}

function calculate() {
    calculator.screen.value = eval( calculator.screen.value);
}