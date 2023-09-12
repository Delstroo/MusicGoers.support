document.getElementById("submit").addEventListener("click", function () {
    var form = document.getElementById("feedbackForm");
    var loadingIndicator = document.getElementById("loading");
    var successIndicator = document.getElementById("success");
    var messageElement = document.getElementById("message");
    var emailField = form.email;
    var descriptionField = form.description;
    var submitButton = form.submit; // Get the submit button

    // Check if email and description fields are empty
    if (emailField.value.trim() === "" || descriptionField.value.trim() === "") {
        messageElement.innerText = "Please fill out both email and description fields.";
        return; // Prevent further execution
    }

    // Disable the submit button
    submitButton.disabled = true;

    // Hide the submit button and show the loading indicator
    submitButton.style.display = "none";
    loadingIndicator.style.display = "block";

    // Simulate a delay to demonstrate the loading indicator (remove this in production)
    setTimeout(function () {
        // Simulate form submission (replace with actual form submission logic)
        // Here, we are just clearing the text fields as a demonstration
        emailField.value = "";
        descriptionField.value = "";

        // Hide the loading indicator and show the success indicator
        loadingIndicator.style.display = "none";
        successIndicator.style.display = "block";

        // Display a success message and clear it after a delay
        messageElement.innerText = "Form submitted successfully!";
        setTimeout(function () {
            messageElement.innerText = "";
        }, 3000);

        // Hide the success indicator after a delay
        setTimeout(function () {
            successIndicator.style.display = "none";

            // Re-enable the submit button
            submitButton.disabled = false;

            // Show the submit button again
            submitButton.style.display = "block";
        }, 3000);

    }, 2000); // Simulated submission delay of 2 seconds (remove in production)
});
// Function to toggle the submit button state based on input values
function toggleSubmitButtonState() {
    var emailField = document.getElementById("email");
    var descriptionField = document.getElementById("description");
    var submitButton = document.getElementById("submit");

    // Check if both email and description fields are filled out
    if (emailField.value.trim() !== "" && descriptionField.value.trim() !== "") {
        submitButton.disabled = false; // Enable the submit button
    } else {
        submitButton.disabled = true; // Disable the submit button
    }
}

// Add an event listener to check for input changes in email and description fields
document.getElementById("email").addEventListener("input", toggleSubmitButtonState);
document.getElementById("description").addEventListener("input", toggleSubmitButtonState);

