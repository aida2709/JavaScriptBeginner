### The goal of this task is to implement form validation.

Below each input, you will notice a `div` that contains the error message (e.g., `prezimeError`). Each of these div elements by default has the `hide` class. If you want to display a specific error, just remove the `hide` class. Conversely, if you want to hide an error, simply add the `hide` class back.

The following validation should be implemented:

- All fields in the form are required.
- For the "age" field, additionally check if the entered value is a number.

When the "Spremi" button is clicked, the form should first be validated. If there are invalid fields, display the error messages. If everything is valid, show an alert: `Podaci uspjesno spremljeni`.

### EXTRA EXERCISE FOR HOMEWORK:
- Implement the validation of all fields to trigger on input field value changes, not just when the button is clicked.