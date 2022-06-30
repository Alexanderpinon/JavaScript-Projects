function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2-5;
    document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10,divided in half and then subtracted by 5 equals" + simple_Math;
    window.alert(Math.random());
}

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("simple").innerHTML = "when you divide 25 by 6 you have a remainder of:" + simple_Math
}

function negation_Operator() {
    var x = 10;
    document.getElementById("X").innerHTML = -x
}

var X = 5;
X++;
document.write(X);

var X = 5.25;
X--;
document.write(X);