document.addEventListener("DOMContentLoaded", function () {
    // Function to toggle the submit button state based on input values
    function toggleSubmitButtonState() {
        var emailField = document.getElementById("Email");
        var descriptionField = document.getElementById("Description");
        var submitButton = document.getElementById("submit");

        // Check if both email and description fields are filled out
        submitButton.disabled = emailField.value.trim() === "" || descriptionField.value.trim() === "";
    }

    // Add an event listener to check for input changes in email and description fields
    document.getElementById("Email").addEventListener("input", toggleSubmitButtonState);
    document.getElementById("Description").addEventListener("input", toggleSubmitButtonState);

    // Add a submit event listener to the form
    document.getElementById("submit-to-google-sheet").addEventListener("submit", function (e) {
        e.preventDefault();

        // Your form submission logic here
        var form = e.target;
        var loadingIndicator = document.getElementById("loading");
        var successIndicator = document.getElementById("success");
        var messageElement = document.getElementById("message");
        var emailField = form.elements["Email"];
        var descriptionField = form.elements["Description"];
        var submitButton = form.elements["submit"];

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

        const scriptURL = 'https://script.google.com/macros/s/AKfycbwIzUWyxoxtIucwsQuh06bkcQSIZWTTrpwZHgO9l5bUBvt4mA6AkTeyf__cvCDHyZzy/exec';

        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
              .then(response => console.log('Success!', response))
              .catch(error => console.error('Error!', error.message))
          })
    });
});
