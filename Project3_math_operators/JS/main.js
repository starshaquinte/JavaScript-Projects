function addition_Function()    {
    var sum = 8 + 3; //defining the function addition
    document.getElementById("Math");
    innerHTML = "The sum of  " + 8 + 3 + sum; //putting the value of the variable into the html element 
}

function subtraction_Function() { //defining the function subtractrion
    var subtraction = 9 - 3; //defining the variable and giving it a number value
    document.getElementById("Math").innerHTML = "9 - 3 = " + subtraction; //putting the value of the variable into the html element 
}

function multiplication_Function()   { //defining the function muliplication
    var multiplication = 5 * 4; //defining the variable and giving it a number value
    document.getElementById("Math").innerHTML = "5 * 4 = " + simple_Math; //putting the value of the variable into the html element 
}

function division_Function()    { //defining the function division
    var division = 67 / 8; //defining the variable and giving it a number value
    document.getElementById("Math").innerHTML = "67 / 8 = " +simple_Math; //putting the value of the variable into the html element 
}

function more_Math()    { //defining the function more Math
    var simple_Math = (10 + 3) * 6 / 4 - 6; //defining the variable and giving it a number value
    document.getElementById("Math").innerHTML = "10 plus 3, multiplied by 6, \
    divided by 4 and then subtracted by 6 equals  " + simple_Math; //putting the value of the variable into the html element 
}

function modulus_Operator() { //defining the function modulus operator
    var simple_Math = 64 % 9; //defining the variable and giving it a number value
    document.getElementById("Math").innerHTML = "When you divide 64 by 9 you have a remainder of" + simple_Math; //putting the value of the variable into the html element 
}

function negation_Operator()    { //defining the function negation operator
    var x = 86; //defining the variable
    document.getElementById("Math").innerHTML = -x; //putting the value of the variable into the html returns the negative variable
}

var x = 3; //variable equals 3
x++; //increment operator
document.write(x); //variable increment from 3 to 4

var x = 8.50; //variable equals 8.50
x--; //decrement operator
document.write(x); //variable decrement 7.50

window.alert(Math.random() * 100); //random number between 0 and 100
