var expression = '';
var res = document.getElementById('res');

function appendOperand(event) {
    expression += event.target.innerHTML;
    res.innerHTML = expression;
}

function clearAll() {
    expression = '';
    res.innerHTML = '';
}

function calculate() {
    let opartor = expression.match(/[\+\-\*\/]/)[0];
    let oparands = expression.split(/[\+\-\*\/]+/);
    
    expression = parseInt(eval(parseInt(oparands[0], 2) + opartor + parseInt(oparands[1], 2))).toString(2);

    res.innerHTML = expression;
}
