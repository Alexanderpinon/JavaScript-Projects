// this variable keeps track of whose turn it is.
let activePlayer = 'X';
//this array stores an array of moves. we use this to determine win conditions
let selectedSquares = [];

//This function is for placing an x or o in a square.
function placeXorO(squareNumber) {
    // this function parses the selectedSquares array to search for win conditions
//drawline() function is called to draw a line on the screen if condition is met
function checkWinConditions() {
    // X 0, 1, 2 condition 
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }
    // X 3, 4, 5 condition
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
    // X 6, 7, 8 condition
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }
    // X 0, 3, 6 condition
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }
    // X 1, 4, 7 condition
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) }
    // X 2, 5, 8 condition
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }
    // X 6, 4, 2 condition
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }
    // X 0, 4, 8 condition
    else if (arrayIncludes('0X', '4x', '8x')) { drawWinLine(100, 100, 520, 520) }
    // O 0, 1, 2 condition
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) }
    // O 3, 4, 5 condition
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }
    // O 6, 7, 8 condition
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }
    // O 0 , 3, 6 condition
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558) }
    // O 1, 4, 7 condition
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }
    // O 2, 5, 8 condition
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }
    // O 6, 4, 2 condition
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) }
    // O 0, 4, 8 condition
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) }
    // this condition checks for a tie. if none of the above conditions are met and 
    // 9 squares are selected the code executes 
    else if (selectedSquares.length >= 9) {
        //this function plays the tie game sound
        audio('./media/tie.mp3');
        //this function sets a .3 second timer before the resetGame is called 
        setTimeout(function () {resetGame(); }, 500);
    }
    //this functions checks if array includes 3 strings it is used to check for
    //each win condition
    function arrayIncludes(squareA, squareB, squareC) {
        //these 3 variables will be used to check for 3 in a row
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        //if the 3 variables we pass are all included in ourn array then
        //true is returned and our else if condition executes the drawWinLine() function
        if (a === true && b === true && c === true) { return true; }
    }
}
    //this conditions ensures a square hasnt been selected already
    //the .some() method is used to check each element of selectSquare array
    //to see if it contains the square number clicked on
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //this variable retrieves the HTML element id that was clicked.
        let select = document.getElementById(squareNumber);
        //this condition checks whose tuen it is
        if (activePlayer === "X") {
            //if active player is equal to "X", the x.png is placed in HTML.
            select.style.backgroundImage = 'url("images/x.png")';
            //active player may only be "X" or "O"so, if not "X" it must be "O"
        } else {
            //if activePlayer is qual to "O", the o.png is placed in HTML
            select.style.backgroundImage = 'url("images/o.png")';
        }
        //squareNumber and activePlayer are concatenated together and added to array
        selectedSquares.push(squareNumber + activePlayer);
        //this calls a function to check for any win conditions.
        checkWinConditions();
        //this condition is for changing the active player,
        if (activePlayer === "X") {
            //if active player is "X" change it to "O"
            activePlayer = "O";
            //if active player is anything other than "X"
        } else {
            //change the activePlayer to "X"
            activePlayer = "X"
        }
        // this function plays placement sound
        audio('./media/place.mp3');
        //this condition checks to see if it is the computers turn
        if (activePlayer === "O") {
            //this function disables clicking for computers turn
            disableClick();
            //this function waits 1 second before the computer places an image and enables click
            setTimeout(function () { computersTurn(); }, 1000);
        }
        //returning true is needed for our computersTurn() function to work
        return true;
     }
     //this function results in a random square being selected by the computer
     function computersTurn() {
        //this boolean is needed for our while loop
        let success = false;
        //this variable stores a random number 0-8
        let pickASquare;
        //this condition allows our while loop to keep trying if a square is selected already
        while (!success) {
            //a random number between 0 and 8 is selected 
            pickASquare = String(Math.floor(Math.random() *9));
            //if the random number evaluated returns true, the square hasnt been selected yet
            if (placeXorO(pickASquare)) {
                //this line calls the function
                placeXorO(pickASquare);
                //this changes our boolean and ends the loop
                success = true
            };
        }
    }
}


//This function makes our body element termporaly unclickable
function disableClick() {
    // this makes our body unclickable
    body.style.pointerEvents = 'none';
    // This makes our body clickable agin after 1 second
    setTimeout(function () {body.style.pointerEvents = 'auto'; }, 1000);
}

//this function takes a string parameter of the path you set eariler for
//placement sound
function audio(audioURL) {
    // we create a new audio object and we pass the path as a parameter
    let audio = new Audio(audioURL);
    //play method plays our audio sound
    audio.play();
}

//this functions utilizes HTML canvas to draw win lines 
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //this line accesses our HTML canvas element
    const canvas = document.getElementById('win-lines');
    //this line gives us access to methods and properities to use  on canvas
    const c = canvas.getContext('2d');
    //this line indictors where the start of a lines x axis is
    let x1 = coordX1,
        //this line indictes where the start of a lines y axis is
        y1 = coordY1,
        //this line indictes where the end of a lines x axis is
        x2 = coordX2,
        // this line indctes where the end of a lines y axis is
        y2 = coordY2,
        //this variable stores tempory x axis data we update in our animation loop
        x = x1,
        //this variable stores tempory y axis data we update in our animation loop
        y = y1;
        //this function interacts with the canvas
        function animateLineDrawing() {
            //this variable creates a loop
            const animationLoop = requestAnimationFrame(animateLineDrawing);
            //this method clears content from the last loop iteration
            c.clearRect(0, 0, 608, 608);
            //this method starts a new path
            c.beginPath();
            //this method moves us to a starting point in our line
            c.moveTo(x1, y1);
            //this method indictates the end point in our line
            c.lineTo(x, y);
            //this method sets the width of our line .
            c.lineWidth = 10;
            //this method sets the color of our line
            c.strokestyle = 'rgba(70, 255, 33, .8';
            //this method draws everything we laid out above
            c.stroke();
            //this condition checks if we've reached endpoints
            if (x1 <= x2 && y1 <= y2) {
                //this condition adds 10 to the previous end x endpoint
                if (x < x2) { x += 10; } 
                //this condition adds 10 to the previous end y endpoint
                if (y < y2) { y += 10; }
                //this condition is similar to the one above
                //this is necessary for the 6, 4, 2 win conditions
                if (x >= x2 && y >= y2) {cancelAnimationFrame(animationLoop); }
            }
            //this condition is simiar to the one above
            //this is necessary for the 6, 4, 2 win conditions
            if (x1 <= x2 && y1 >= y2) {
                if (x < x2) {x += 10; }
                if (y > y2) {y -= 10; }
                if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop);}
            }
        }
        // this function clears our canvas after our win line is drawn
        function clear() {
            //this line starts animation loop
            const animationLoop = requestAnimationFrame(clear);
            //this line clears our canvas
            c.clearRect(0, 0, 608, 608);
            //this line stops animatiion loop
            cancelAnimationFrame(animationLoop);
        }
        //this line disallows clicking while the win sound is playing
        disableClick();
        // this line plays win sounds
        audio('./media/winGame.mp3');
        //this calls our main animation loop
        animateLineDrawing();
        // this line waits 1 second. then clears canvas, resets game, an allows clicking again
        setTimeout(function () { clear(); resetGame(); }, 1000);
}     

//this function resets the game in the event of tie or win
function resetGame() {
    //this for loop iterates through each HTML sqaure element
    for (let i = 0; i < 9; i++) {
        //this variable gets the HTML element 1 
        let square = document.getElementById(String(i));
        //this removes our elements backgroundimage
        square.style.backgroundImage = '';
    }
    //this resets our array so it is empty and we can start over
    selectedSquares = [];
}