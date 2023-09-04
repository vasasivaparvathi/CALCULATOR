var firstnumber = '';
var secondnumber = ''
var operator = '';

function Appandnum(num) {
    if (operator === "") {
        firstnumber +=num;
        document.getElementById("result").value = firstnumber;
    }
    else {
        secondnumber += num;
        document.getElementById("result").value = secondnumber;
    }
}
function operator1(opt) {
    operator = opt;
    document.getElementById("result").value = secondnumber;
}
var result1 = "";
function calculator() {
    
    switch (operator) {
        case '+':
            result1 = parseInt(firstnumber) + parseInt(secondnumber);
            break;
        case '-':
            result1 = parseInt(firstnumber) - parseInt(secondnumber);
            break;

        case '/':
            result1 = parseInt(firstnumber) / parseInt(secondnumber);
            break;
        case '%':
            result1 = parseInt(firstnumber) % parseInt(secondnumber);
            break;
        case '*':
            result1 = parseInt(firstnumber) * parseInt(secondnumber);
            break;
    }
    document.getElementById("result").value = result1;
}
function clear1() {
    firstnumber = '';
    secondnumber = '';
    operator = '';
    document.getElementById("result").value = "";
}