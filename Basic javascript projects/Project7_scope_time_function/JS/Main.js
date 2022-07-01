var X = 10;
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}                                    // this is a global variable
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_1() {
    var X = 10;
  document.write(20 + X + "<br>");
}                    // this is a local variable
function Add_numbers_2() {
  console.log(X + 100); // this is a console.log()
   }
Add_numbers_1();
Add_numbers_2();


if (1 < 2) {
    document.write("the left number is smaller than the right")
} // this is a if statment

function Age_function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough!";
    } // this is a if/else function
    else {
        Vote = "You are note old enough!";
    }
    document.getElementById("How_old_are_you").innerHTML = Vote;
}


function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!"; // this is a if/else if/ else function
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}