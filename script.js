
allCells = document.querySelectorAll("[cell]"); // in square brackets because it is an attribute
allCells.forEach(cell => {
    cell.addEventListener('click', () => {
        console.log("cell clicked");
        cell.style.backgroundColor = 'red';
    } );
});