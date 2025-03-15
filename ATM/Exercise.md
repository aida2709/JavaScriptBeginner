## ATM Simulator Application  
This task involves creating an **ATM Simulator** application that allows users to log in, check their balance, and withdraw money.  

### Implementation:  

### 1. **Login**  
   - In `index.html`, there is a `div` with the ID `login`.  
   - The user must enter their **card number** and **PIN** to log in.  
   - In `script.js`, there is an array called `users` that represents bank customers.  
   - After the user enters their details, check if the credentials match any user in the `users` array.  
   - **Validation:**  
     - All fields are required.  
     - If the credentials are incorrect, show an alert: `"Data is not valid"` (Data is incorrect).  
     - If the credentials are correct:  
       - Hide the `login` div (use the `hide` class).  
       - Show the `home` div (remove the `hide` class).  

### 2. **Logout ("Prekid")**  
   - This option logs the user out and returns them to the login screen.  
   - In the `home` div, there are three buttons: **Isplata (Withdraw), Stanje (Balance), and Prekid (Exit)**.  
   - When the **Prekid** button is clicked:  
     - Hide the `home` div.  
     - Show the `login` div.  

### 3. **Check Balance ("Stanje")**  
   - This option displays the user's account balance.  
   - In `index.html`, there is a `div` with the ID `balance`.  
   - When the user selects **Stanje**, the following happens:  
     - The `balance` div is shown (remove the `hide` class).  
     - The current balance of the logged-in user is displayed inside the `<h3>` tag with ID `balanceAmount`.  

### 4. **Withdraw Money ("Isplata")**  
   - This option allows the user to withdraw money.  
   - When the user selects **Isplata**:  
     - Show the `div` with ID `payoutDiv`, which contains the withdrawal form.  
     - Validate that the user has enough funds before processing the withdrawal.