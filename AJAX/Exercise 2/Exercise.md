## Dog Image  
1. Create a button with the text `Show the dog` (you can add it in `index.html`). The button should have the classes `btn btn-success`.  
2. When this button is clicked, fetch data from the API endpoint `https://dog.ceo/api/breeds/image/random`.  
3. If the data is successfully retrieved from the API, create an image element where the `src` attribute is set to the received URL. **Note:** Don't forget to set the image's height and width.  
4. If the API request fails, log an error message to the console.  
5. Improve the task as follows:  
   - While the AJAX request is in progress, remove the class `btn-success` from the button and add the class `btn-danger`.  
   - Once the AJAX request is complete, restore the `btn-success` class to the button.