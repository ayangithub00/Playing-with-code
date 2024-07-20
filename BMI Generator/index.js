const form = document.querySelector('form'); // Get the form element

form.addEventListener('submit', (e) => { // Add a 'submit' event listener to the form // we can write click also in place of submit
    e.preventDefault(); // Prevent the form from submitting the usual way

    const height = parseInt(document.querySelector("#height").value); // Get the height input value and convert it to a number
    const weight = parseInt(document.querySelector("#weight").value); // Get the weight input value and convert it to a number
    const result = document.querySelector(".result"); // Get the element where we will show the result
    const uw = 18.6; // Set the value for underweight threshold
    const ow = 24.9; // Set the value for overweight threshold

    // Check if the height is not valid
    if (height === '' || height <= 0 || isNaN(height)) {
        result.innerHTML = 'Please provide a valid height'; // Show a message if height is invalid
    } 
    // Check if the weight is not valid
    else if (weight === '' || weight <= 0 || isNaN(weight)) {
        result.innerHTML = 'Please provide a valid weight'; // Show a message if weight is invalid
    } 
    // If both height and weight are valid
    else {
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2); // Calculate the BMI
        let msg = `Your BMI is ${bmi}. `; // Create a message that includes the BMI value

        // Determine the BMI category and add to the message
        if (bmi < uw) {
            msg += "You are underweight.";
        } else if (bmi > ow) {
            msg += "You are overweight.";
        } else {
            msg += "You are normal weight.";
        }

        result.innerHTML = msg; // Show the final message
    }
});
