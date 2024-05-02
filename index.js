// Get DOM elements
const infoButton = document.getElementById("infoButton");
const inputButton = document.getElementById("inputButton");
const mainBody = document.getElementById("mainbody");

// Add event listener for info button
infoButton.addEventListener("click", function() {
    alert("You can generate factorials of integers by playing the game!");
});

// Add event listener for input button
inputButton.addEventListener("click", function() {
    const numberInput = prompt("Please enter a number:"); // Prompt for number

    if (numberInput === null) return; // Check if user canceled (null)
    
    const number = parseFloat(numberInput); // Convert to number

    if (isNaN(number)) { // Validate input
        alert("Invalid input. Please enter a number.");
        return;
    }

    // Hide previous elements 
    mainBody.style.display = "none";

    // Create result container
    const resultContainer = document.createElement("div");
    resultContainer.classList.add("result");
    document.body.appendChild(resultContainer);

    // Create statement
    const statement = document.createElement("p");
    statement.textContent = `Below are the factorials of all numbers from 1 to ${number}.`;
    resultContainer.appendChild(statement);

    // Create table element
    const table = document.createElement("table");
    table.classList.add("table", "table-striped");
    resultContainer.appendChild(table);

    // Create table header row
    const headerRow = document.createElement("tr");
    const numberHeader = createHeaderCell("Number");
    const factorialHeader = createHeaderCell("Factorial");
    appendCellsToRow(headerRow, [numberHeader, factorialHeader]);
    table.appendChild(headerRow);

    // Calculate and display factorials
    for (let i = 1; i <= number; i++) {
        const row = document.createElement("tr");
        const numberCell = createDataCell(i);
        const factorialCell = createDataCell(calculateFactorial(i));
        appendCellsToRow(row, [numberCell, factorialCell]);
        table.appendChild(row);
    }
});

// Function to create header cell
function createHeaderCell(text) {
    const headerCell = document.createElement("th");
    headerCell.textContent = text;
    return headerCell;
}

// Function to create data cell
function createDataCell(text) {
    const dataCell = document.createElement("td");
    dataCell.textContent = text;
    return dataCell;
}

// Function to append cells to a row
function appendCellsToRow(row, cells) {
    cells.forEach(cell => row.appendChild(cell));
}

// Function to calculate factorial
function calculateFactorial(n) {
    let factorial = 1;
    for (let i = 2; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}
