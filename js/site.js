// Get the values from the page
// Start or controller function
function getValues() {
    // Get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    // Validate the input
    // Parse into integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);
    let numbers = [];

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        // We call generateNumbers
        numbers = generateNumbers(startValue, endValue);
        // We call displayNumbers
        displayNumbers(numbers);
    } else {
        alert("You must enter integers")
    }

}

// Generate numbers from the startValue to the endValue
// Logic function
function generateNumbers(sValue, eValue) {
    let numbers = [];

    //  Get all numbers from start to end
    for(let i = sValue; i <= eValue; i++) {
        numbers.push(i);
    }

    return numbers;

}

// Display the numbers and mark even numbers bold
// View function
function displayNumbers(numbers) {
    let templateRows = "";

    for (let i = 0; i < numbers.length; i++) {

        let number = numbers[i];
        let className = "";
        if (number % 2 == 0) {
            className = "even";
        } else {
            className = "odd";
        }
        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
    }

    document.getElementById("results").innerHTML = templateRows;
    
}