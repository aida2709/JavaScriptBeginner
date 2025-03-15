In this task, we will create a `Rock Paper Scissors` game.

When you open the webpage, you will notice the three mentioned options (IDs are `rockCard`, `paperCard`, and `scissorsCard`).
Below that, you will see a heading `Computer` and a `div` with the ID `computersChoice`. In this `computersChoice` div, a randomly generated option will be displayed, representing the computer's choice (rock, paper, or scissors).

Whenever the user clicks/selects one of the three options (IDs are `rockCard`, `paperCard`, and `scissorsCard`), the program should generate a random option for the computer in the `computersChoice` div (show the image and text of the option. All images are available in the images folder). After generating the computer's random choice, in the `winner` div, you need to display who won:
- If the user won, display `User wins` in green letters.
- If the computer won, display `Computer wins` in red letters.
- If it's a tie, display `No one wins` in black letters.

At the same time, in the `score` div, the current score should be displayed. Each time the user wins, the score increases by one, otherwise, it decreases by one.

Clicking on the `Restart` button should reset the game:
- The score should be set to zero, and there should be no currently selected computer option — in that case, you can set the image to `images/default.png`.
- Also, the `winner` div should not display anything.