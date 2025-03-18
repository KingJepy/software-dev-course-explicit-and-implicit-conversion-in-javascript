/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/

// this code works as youd expect
let result = "5" - 2;
console.log("The result is: " + result);

//change the boolean from "False" to "Hello!" so the boolean returns true
let isValid = Boolean("Hello!");
if (isValid) {
    console.log("This is valid!");
}

let age = "25";
// convert the string to a number so that the + function works properly and actually adds the numbers
let ageAsNumber = Number(age)
let totalAge = ageAsNumber + 5;
console.log("Total Age: " + totalAge);

// Lets show explicit conversion by taking a string and turning it into a float
let length = "45.25 meters"
// converts the string to a float and drops the text off the end
console.log(parseFloat(length))

// shows implicit conversion since I am taking the variable NaN as a boolean to return False
let notTrue = Boolean(NaN)
console.log(notTrue)