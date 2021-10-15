
function calculate() {
	var number1 = document.getElementById('firstNum').value;
	var number2 = document.getElementById('secondNum').value;
	var num1 = parseFloat(number1);
	var num2 = parseFloat(number2);
	var operator = document.getElementById('operator').value;

	if (operator == '+') {
		result = num1 + num2;
	}
	else if (operator == '-') {
		result = num1 - num2;
	}
	else if (operator == '*') {
		result = num1 * num2;
	}
	else if (operator == '/') {
		result = num1 / num2;
	}

	
document.getElementById('result').innerHTML= result;

}
