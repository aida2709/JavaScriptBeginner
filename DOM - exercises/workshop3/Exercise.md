Refine the previous task (the task from workshop 2) as follows:

a) First, prompt the user to enter a title.

b) If the title is `Admin`, the user should be shown all three buttons (Save, Delete, Edit).
   If the title is `Operator`, the user should be shown the Save and Edit buttons.
   If the title is `Student`, the user should be shown only the Save button.
   If the user does not enter any of the above titles, then do the following:
   - Create an `h1` element with the content `Not Authorized`.
   - Set the font color of the created element to red.
   - Add the created element to the body.

---

This task requires capturing user input for a title and dynamically showing buttons based on the role (`Admin`, `Operator`, or `Student`). If an unrecognized title is provided, the app should display a warning message.