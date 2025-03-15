Create a small quiz where the user is shown an image and below it, they need to enter what is shown in the image. Based on this input, the program calculates the score.

In the `script.js` file, you'll notice an array called `items`. Each object in this array represents a quiz 'question'. The question consists of an image to display (image), and correct answers. Therefore, the user's input in the `answerInput` field should be compared with the answers in this array. For example, if the user enters `cat` for the first question, it is considered correct. You need to load the image in an `img` tag with the id `image`.

When the user clicks the `Next` button, the next question should be displayed. The user doesn't have to enter anything to proceed to the next question, but if they don't, the answer is considered incorrect. When the last question is reached and the `Next` button is clicked, the final score should be displayed in the heading with the id `result` (to display it, you need to remove the `hide` class).

Additionally, clicking on the `Restart` button should restart the game (showing the first question, resetting the score to zero, and hiding the final result).

======================================================================================================================  
For extra practice:
- Implement a `Previous` button so that the user can go back to a previous question and revise their answers. However, this requires a more complex calculation of the answers. (Idea: Add a property `osvojenoBodova` to each object.)
- Add an option to store the history of scores (you can store the date and time the quiz was taken and create a leaderboard).