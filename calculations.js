function addition(){
    //taking input
    var op1 = parseFloat(document.getElementById("num1").value);
    var op2 = parseFloat(document.getElementById("num2").value);

    //calculation
    var result = op1 + op2;

    //display in the textfield on top
    document.getElementById("result").value = document.getElementById("num1").value + " + " + document.getElementById("num2").value + " = " + result;
    }

function multiplication(){
    var op1 = parseFloat(document.getElementById("num1").value);
    var op2 = parseFloat(document.getElementById("num2").value);
    var result = op1 * op2;
    document.getElementById("result").value = document.getElementById("num1").value + " x " + document.getElementById("num2").value + " = " + result;
    }

function division(){
    var op1 = parseFloat(document.getElementById("num1").value);
    var op2 = parseFloat(document.getElementById("num2").value);
    var result = op1 / op2;
    document.getElementById("result").value = document.getElementById("num1").value + " / " + document.getElementById("num2").value + " = " + result;
    }