Here is the English translation of the provided text:

---

In this task, we will create a mini TODO organizer application. The goal of the application is to enable the creation of tasks on a to-do list and allow moving them to a done list to mark them as completed. Attached is how everything should look in the end.

Implement the following:

1. Load data into the corresponding lists:
   - In `script.js`, you will notice an array called `tasks`. In `index.html`, you will see two divs with the IDs: `todoList` and `doneList`.
   - Load the tasks from the `tasks` array into the corresponding list. (Tasks where the property `finished` is true should go to the done list, otherwise, they should go to the to-do list).
   - You can see how the items should look in the attached file, but you don't need to strictly follow it.

2. Implement moving a todo task to done:
   - Each task in the to-do list should have a `button` named `Finish`.
   - After the user clicks on this button, the task should automatically move to the done list.
   - Don’t forget to change the task’s property `finished` to true.

3. Implement opening and closing the modal for adding a new task:
   - In `index.html`, you will notice a `button` with the ID `addTaskBtn`.
   - Selecting this button should open the modal to add basic task data.
   - As for the modal, in `index.html` you will notice the modal with the ID `addModal`.
   - To display the modal, you need to add the class `show` and `display:block`. Conversely, to hide it, you need to remove the `show` class and set `display:none`.
   - In this step, you should only implement simple opening and closing of the modal.

4. Implement adding a new task:
   - After the modal opens, allow the user to enter data for a new task.
   - The title of the task is mandatory, while the content is not.
   - The newly created task should have the property `finished` set to false, and it should automatically be added to the to-do list.
   - The task ID should be generated randomly.
   - Implement validation on the form.

5. Implement the option to delete completed tasks:
   - Each task in the done list should have a `Delete` button.
   - After the user selects this option, the task should be deleted from the array and from the list.

=========================================================================================================================
For extra practice:
- As an additional task, you can implement storing task data in local storage, so that even when the app is refreshed, all task data remains.
- Implement the drag-and-drop functionality to move tasks from to-do to done and vice versa (instead of using the Finish button).
- Add a new list `In progress` where tasks that are currently being worked on are located.

