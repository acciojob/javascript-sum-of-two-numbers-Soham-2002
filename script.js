let firstInput = prompt("Enter the first number:");
let secondInput = prompt("Enter the second number:");

// Write your code here and print the output using alert function
const num1 = parseFloat(firstInput);
const num2 = parseFloat(secondInput);

// Validate the inputs
if (
  firstInput === null || secondInput === null || // if user cancels
  firstInput.trim() === "" || secondInput.trim() === "" || // empty inputs
  isNaN(num1) || isNaN(num2) // non-numeric inputs
) {
  alert("Invalid input. Please enter a valid number.");
} else {
  const sum = num1 + num2;
  alert(`The sum of ${num1} and ${num2} is ${sum}.`);
}