//creates a object to keep track of values
const Calculator = {
    //this will display 0 on the screen
    Display_Value: '0',
    //this will hold the first operand for any expressions, we set it to null for now
    first_Operand: null,
    //this checks wether or not the second operand has been inputted by the user
    Wait_Second_Operand: false,
    //this will hold the operator, we set it to null for now
    operator: null
};

//this modifies values each time a button is clicked on
function Input_Digit(digit) {
    const {Display_Value, Wait_Second_Operand } = Calculator;
    //this checks if the wait_second_operand is true and sets display_value
    //to the key that was clicked on
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        //this overwrites display_value if the current value is 0
        //otherwise it adds onto it.
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

//this section handles decimal points
function Input_Decimal(dot) {
    //this ensures that accidental clicking of the decimal point dosnt
    // cause bugs in the operation
    if (Calculator.Wait_Second_Operand === true) return;
    if(!Calculator.Display_Value.includes(dot)) {
        //we are saying that if the display_value does not contain a decimal point
        // we want to add a decimal point
        Calculator.Display_Value += dot;
    }
}

//this section handles operators
function Handle_Operator(Next_Operator) {
    const {First_Operand, Display_Value, operator} = Calculator;
    //when an operator key is pressed we covert the current number 
    //displayed on the screento a number and then store the result
    //calculator.first_operand if it doesnt already exist
    const Value_of_Input = parseFloat(Display_Value);
    //checks if an operator already exists and if wait_second_operand is true,
    //then updates the operator an exists for the function
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.first_Operand = Value_of_Input;
    } else if (operator) {//checks if an operator alrady exists
        const Value_Now = First_Operand || 0;
        //if operator exists operator, property lookup is performed for the operator
        //in the perform_calculation object and function matches the
        //operator is executed 
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        //here we add fixed amont of numbers after decimal
        result = Number(result).toFixed (9);
        //this will remove any trailing 0's
        result = (result *1).toString();
        Calculator.Display_Value = parseFloat(result);
        Calculator.first_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}
const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};
function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}
//this function updates the calculator screen with the contents of display_value
function Update_Display() {
    //makes use of the calculator-screen class to target the
    //input tag in the HTMl document
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();
//this section monitors button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click,' (Event)) ; {
    //the target variable is an object that represnts the element
    //that was clicked
    const { target } = Event;
    //if the elemet that was clicked on its not a button, exit the function
    if (!target.matches('button')) {
        return;
    }
    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    //ensures that AC clears all the inputs from calculator screen
    if(target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
}