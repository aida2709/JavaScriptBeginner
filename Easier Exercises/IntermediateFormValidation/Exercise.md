The goal of this task is to implement form validation.

When the "Spremi" button is clicked, the form should be validated first. If there are any invalid fields, the errors should be displayed. If everything is fine, an alert should be shown with the message "Podaci uspjesno spremljeni."

You will notice that under each input, there is a div containing an error message (e.g., `prezimeError`). Each of these divs has the class `hide` by default. If you want a specific error to be shown, simply remove the `hide` class. Conversely, if you want to hide an error, just add the `hide` class back.

The following validation rules should be implemented:

- All fields in the form are required, except for the checkbox.
- For the "godine" field, additionally check that the entered value is a number.
- You will notice a div with the ID `emailDiv`, which is hidden by default (has the class `hide`). This div should be displayed only if the checkbox is clicked (remove the `hide` class). Additionally, during validation, if the checkbox is checked, the email field should become required. If the checkbox is not checked, the email field should not be required.

====================================================================================================================
FOR ADDITIONAL HOMEWORK:
- Implement validation for all fields that runs when the input field value changes, rather than only when the button is clicked.
====================================================================================================================