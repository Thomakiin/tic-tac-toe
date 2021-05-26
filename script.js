
const xClass = 'x'; const circleClass = 'circle';  // these are the names of the classes we use in our css for styling and in our js for identifying
let circleTurn = true; // boolean to keep track of whether it's x or o's turn
let currentClass = circleClass;
const allCells = document.querySelectorAll("[cell]"); // note: cell is in square brackets because it is an attribute not a class
const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal wins
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical wins
    [0, 4, 8], [2, 4, 6]] // diagonal wins

function placeMark(cell) {
    if (circleTurn) {
        cell.classList.add(circleClass); // adds the 'circle' class to this element
    }
    else {
        cell.classList.add(xClass); // adds the 'x' class to this element
    }
}

function switchTurn() {
    circleTurn = !circleTurn;
    if (circleTurn) {
        currentClass = circleClass;
    }
    else {
        currentClass = xClass;
    }
}

function checkWin() {
    //var winDetected = allCells.some( () => { })

    for (i = 0; i < winningCombinations.length; i++) {
        let currentCombination = winningCombinations[i];

        if (currentCombination.every(index => {
            return allCells[index].classList.contains(currentClass);
        })) {
            console.log(currentClass + " wins");
        }
    }
}

function handleClick(event) {
    console.log("click");
    placeMark(event.target); // passes in the selected element
    checkWin();
    switchTurn();
    //event.target.removeEventListener('click', handleClick); // now handled in add event listener with the "once" property
}

allCells.forEach(cell => {
    cell.addEventListener('click', handleClick, { once: true }); // "once" allows the function to only be called once per element
});

