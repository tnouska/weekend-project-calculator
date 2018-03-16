# weekend-project-calculator

Welcome to your second weekend challenge!

We are going to be building a calculator application using jQuery, Node, and Express!!

The logic for the calculator needs to be implemented on the server. The client side will take in the values (in 2 input text fields) and the type of mathematical operation (selected using a button on the DOM). Each of the numerical values and type of mathematical operation will be bundled up in an object and then sent to the server via a POST. So when the object is sent, it should look something like this:

{
   x: 3,
   y: 4,
   type: "Add"
}
Once the server receives it, build out logic to compute the numbers in 1 of 4 different ways. The server should be able to handle Addition, Subtraction, Multiplication, and Division. Once the calculation is complete, it should be sent back down to the client side app where it should be displayed on the DOM.

NOTE: You can send an object back as a response to a POST request or follow up the POST with a GET request to retrieve the data. Using a GET request to follow up is more common at Prime and will put you in a better position working on the History feature below.

Finally, build a 'clear' button that resets the whole experience.

History:
Keep a historical record of all math operations on the server. Display a list of all previous calculations on the page when it loads. Update the list when a new calculation is made.

History:
3 * 5 = 15
4 - 2 = 2
4 * 3 = 12
3 + 6 = 9
HARD MODE:
Convert the input fields for the two values to Buttons. So the experience would allow the user to click on a numerical button, then a mathematical operation, then a numerical button again. Then have an equal button that sends all of the information to the server.

Stretch Goals:
Allow a user to clear the history by clicking on a button. Technically this shouldn't be a GET or a POST. Look into making a DELETE request!
Allow a user to click on an entry in the History list to re-run that calculation. This should display the answer on the calculator interface like a normal calculation.
Deploy to Heroku!
Anything else you can think of!



Progress

- [x] make sure server is up and running
- [ ] add inputs into index.html
- [ ] set up and test $.ajax GET and POST
- [ ] create client side logic for taking in user input
- [ ] create server side logic for handling json object from client
- [ ] orginize data that is to be sent back to client
- [ ] on client take data from server and append DOM with history
- [ ] on client take data that was received from server and append correct calculation to DOM
hard mode:
- [ ] convert the two input fields into 10 buttons
    - [ ] maybe add parenthases as buttons???
strech goal:
- [ ] logic on client to click on old equation in history and have equation be 
sent to server to be calculated and then back to client to be displayed.
- [ ] "DELETE" request to remove history from array and update calc history on DOM
- [ ] deploy onto HEROKU
