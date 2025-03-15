In this task, we will create a simple Currency Converter application. The goal of the application is to convert an amount from one currency to another. The only two currencies we will implement for now are BAM and EUR.

Implement the following:

1. When the "Izracunaj" button is clicked, it should fetch the amount entered in the input with the ID `valuta1`, calculate the result, and place it in the input with the ID `valuta2`.
2. Make sure to include validation. When the "Izracunaj" button is clicked, if nothing is entered in the `valuta1` field, display an error with the ID `error`.
3. When entering an amount in the `valuta1` field, prevent the user from entering letters.
4. When the "Zamijeni" button is clicked, swap the current currency arrangement. For example, if the conversion was from BAM to EUR, it should now be from EUR to BAM and vice versa. Ensure that the label names above the corresponding inputs (i.e., `valuta1Label` and `valuta2Label`) also change accordingly.