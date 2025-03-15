- In the `script.js` file, you will notice an array `students`. The goal of this task is to display a table with student details.
- Retrieve the table (`table`) and add the class `table` to it.
- Retrieve the `tbody` element inside the table.
- For each student in the `students` array, create a table row (`tr`).
- For each row, add two cells (`td`). One should contain the student's name, and the other should contain the course they attended.
- In the end, you should get something like this for one row:

````
<tr>
   <td>John Doe</td>
   <td>Java Script</td>
   <td>Yes</td>
</tr>
````

- Modify the task so that if the student has passed the course (`passed: true`), add the class `table-success` to the row (`tr`). If the student has not passed (`passed: false`), add the class `table-danger` to the row.