## Book Finder Application  
This task involves creating a **Book Finder** application. The goal is to search for and display different books.  

### Implementation:  

1. **Display all books in a table**  
   - As soon as the webpage loads, fetch books from the API endpoint `https://gutendex.com/books` and populate the table (already present in `index.html`).  
   - The table should display:  
     - Book ID  
     - Book Title  
     - All book authors (separated by commas).  

2. **Search by book title**  
   - In `index.html`, there is an input field with the ID `search` and a button with the ID `searchBtn`.  
   - When `searchBtn` is clicked, fetch books using the API endpoint:  
     ```
     https://gutendex.com/books?search=${enteredBookTitle}
     ```
   - Display only the books returned by this search in the table.  
   - If the user doesn't enter anything in the search field, display all books.  

3. **Disable search button during API call**  
   - While the API request is in progress, disable the `searchBtn`.  
   - Once the request is complete, re-enable the button.