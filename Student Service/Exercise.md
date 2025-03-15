In this task, we will create a mini application for student record management. Feel free to modify both the `index.html` and anything else you need.

Attached is how everything should look in the end.

After you run the code, you will notice a table and a button labeled `Add Student`. Implement the following:

1. Load student data:
   - In `script.js`, you will notice an array called `students`.
   - Load all the elements from this array into a list in `index.html` (using DOM JS methods).

2. Implement opening and closing the modal:
   - Selecting the `Add Student` option should open the modal.
   - You can find the modal in `index.html` under the id `addModal`.
   - To display the modal, you need to add the class `show` and `display:block`. Conversely, to hide it, you need to remove the `show` class and set `display:none`.
   - In this step, you should only implement simple opening and closing of the modal.

3. Implement adding a new student:
   - After opening the modal, display the form to enter student data.
   - All data fields are required.
   - Implement validation on the form.
   - Once the data is successfully entered and the user selects `Save`, the new student should be stored in the students array and displayed in the list.
   - The student's ID should be generated dynamically.

4. Implement editing a student:
   - When the `Edit` action is selected, the modal should open for editing the student data from the row where the `Edit` action was selected.
   - On selecting `Save`, the data in the `students` array should be updated, as well as the list (table).

5. Implement deleting a student - by selecting the `Delete` action.

=========================================================================================================================
For extra practice:
- As an additional task, you can implement storing student data in local storage, so that even when the app is refreshed, all student data remains.
- On the student addition form, make the place/city a dropdown list (select).
- On the student addition form, make the gender selection a checkbox.
=========================================================================================================================

