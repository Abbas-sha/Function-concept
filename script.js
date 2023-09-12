// function userinp(firstName, lastName) {
//     var fullName = firstName + " " + lastName;
//     alert("Hello, " + fullName + "! Welcome!");
//   }
//     var firstName = prompt("Enter your first name:");
//   var lastName = prompt("Enter your last name:");
  
//   userinp(firstName, lastName)

// function calculate(num1, num2, operator) {
//     let result;
  
//     switch (operator) {
//       case '+':
//         result = num1 + num2;
//         break;
//       case '-':
//         result = num1 - num2;
//         break;
//       case '*':
//         result = num1 * num2;
//         break;
//       case '/':
//         if (num2 !== 0) {
//           result = num1 / num2;
//         } else {
//           return "Division by zero is not allowed.";
//         }
//         break;
//       default:
//         return "Invalid operator. Please use +, -, *, or /.";
//     }
  
//     return result;
//   }
  
//   // Example usage:
//   const num1 = 10;
//   const num2 = 5;
//   const operator = '+';
  
//   const result = calculate(num1, num2, operator);
//   document.write(`Result: ${result}`);
  

// function isPalindrome(str) {
//     // Remove non-alphanumeric characters and convert to lowercase
//     str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
//     // Compare the original string with its reverse
//     return str === str.split('').reverse().join('');
//   }
  
//   // Example usage:
//   const inputString = "madam";
//   if (isPalindrome(inputString)) {
//     document.write(`${inputString} is a palindrome.`);
//   } else {
//     document.write(`${inputString} is not a palindrome.`);
//   }
  

// // Function to convert Celsius to Fahrenheit
// function celsiusToFahrenheit(celsius) {
//     var fahrenheit = (celsius * 9/5) + 32;
//     document.write(celsius + "°C is " + fahrenheit + "°F", "<br>");
//   }
  
//   // Function to convert Fahrenheit to Celsius
//   function fahrenheitToCelsius(fahrenheit) {
//     var celsius = (fahrenheit - 32) * 5/9;
//     document.write(fahrenheit + "°F is " + celsius + "°C", "<br>");
//   }
  
//   // Example usage:
//   var celsiusTemperature = 30; // Replace with the Celsius temperature you want to convert
//   celsiusToFahrenheit(celsiusTemperature);
  
//   var fahrenheitTemperature = 86; // Replace with the Fahrenheit temperature you want to convert
//   fahrenheitToCelsius(fahrenheitTemperature);
  
















