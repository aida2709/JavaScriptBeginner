### To simulate a basic calculator, follow these steps:

1. **Form Structure**:
    - Create a form with two input fields for the numbers and one input field for the operation symbol (e.g., `+`, `-`, `*`, `/`).
    - Add a `button` with the text `Izracunaj` for calculating the result.
    - Add a `span` element with the `id="rezultat"` to display the result.
    - Add a `button` with the text `DEL` to clear the input fields and the result.

2. **Validations**:
    - Ensure that all input fields (both numbers and the operation symbol) are filled before performing the calculation.
    - Ensure that the "operation symbol" input accepts only a valid operation symbol (`+`, `-`, `*`, `/`) and no other characters.
    - Prevent the user from entering more than one character in the operation symbol input.

3. **Behavior**:
    - When the "Izracunaj" button is clicked, validate the inputs. If they are valid, calculate the result and display it in the `span` with `id="rezultat"`.
    - If any input is missing or invalid, show an error message.
    - When the "DEL" button is clicked, clear all input fields and the result.
