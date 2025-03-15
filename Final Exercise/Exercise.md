## Dictionary

Create an English dictionary application where the user enters a word they're interested in. After clicking the `Get` button, the application should fetch data from the route `https://api.dictionaryapi.dev/api/v2/entries/en/${word}` and display the following details on the webpage:

- In a paragraph with the id `phonetic`, display the text in the format: `Phonetic: ${phonetic of the fetched word}`.
- In a list with the id `meaningsList`, for each item in the `meanings` array returned by the API, load a list item (`li`) with the class `list-group-item`.
- After clicking `Get` and loading the data, clear the previous value from the input field.

If the user clicks `Get` without entering a word, display an alert with the message `Please enter a word`.