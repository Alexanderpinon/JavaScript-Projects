function Vehicle(Make, Model, Year, Color) { // this is a keyword and constructor
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); // this is a variable
var Emily= new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black"); // this is a variable
var Erik= new Vehicle("Ford", "Pinto", 1971, "Mustard"); // this is a variable
function myFunction() { // this is my function
    document.getElementById("Keywords_and_Constructors").innerHTML= // this our its going to be called
    "Erik drives a" + Erik.Vehicle_Color + "-colored" + Erik.Vehicle_Model +
    "manufactured in" + Erik.Vehicle_Year; // this is the result
}

function Vote_Function() { // this is my function
    var Age, Can_Vote;
    Age = document.getElementById("Age").value; // this is how its called 
    Can_Vote = (Age < 18) ? "You are too young":"You are old enough"; // this is what its going to say from browser input
    document.getElementById("Vote").innerHTML = Can_Vote + "To vote.";
}

function count_function() { // this is a nested function
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_Point = 9;
        function Plus_one() {Starting_Point += 1;}
        Plus_one();
        return Starting_Point;
    }
}