/////////////////////////////////////Question # 1/////////////////////////

// // Prompt user for input
// var input = prompt("Enter a character (number or string):");

// // Convert the first character to its ASCII code
// var charCode = input.charCodeAt(0);

// // Check if the input is a number
// if (charCode >= 48 && charCode <= 57) {
//     alert(input + " is a number.");
// } 
// // Check if the input is an uppercase letter
// else if (charCode >= 65 && charCode <= 90) {
//     alert(input + " is an uppercase letter.");
// } 
// // Check if the input is a lowercase letter
// else if (charCode >= 97 && charCode <= 122) {
//     alert(input + " is a lowercase letter.");
// } 
// // If the input doesn't match any category
// else {
//     alert("Input is not a number or letter.");
// }


///////////////////////////////Question # 2//////////////////////////////////

// // Prompt user for the first integer
// var num1 = parseInt(prompt("Enter the first integer:"));

// // Prompt user for the second integer
// var num2 = parseInt(prompt("Enter the second integer:"));

// // Compare the two integers
// if (num1 > num2) {
//     alert(num1 + " is larger than " + num2);
// } else if (num2 > num1) {
//     alert(num2 + " is larger than " + num1);
// } else {
//     alert("Both integers are equal: " + num1 + " and " + num2);
// }


///////////////////////////////Question # 3//////////////////////////////////


// // Prompt user for input number
// var number = parseInt(prompt("Enter a number:"));

// // Check if the number is positive, negative, or zero
// if (number > 0) {
//     alert("The number " + number + " is positive.");
// } else if (number < 0) {
//     alert("The number " + number + " is negative.");
// } else {
//     alert("The number is zero.");
// }


///////////////////////////////Question # 4//////////////////////////////////

// // Function to check if a character is a vowel
// function isVowel(char) {
//     // Convert character to lowercase to handle both cases
//     var lowerChar = char.toLowerCase();

//     // Check if the character is a vowel
//     if (lowerChar === 'a' || lowerChar === 'e' || lowerChar === 'i' || lowerChar === 'o' || lowerChar === 'u') {
//         return true;
//     } else {
//         return false;
//     }
// }

// // Prompt user for input character
// var inputChar = prompt("Enter a single character:");

// // Check if the input character is a vowel and display result
// if (inputChar.length === 1 && isVowel(inputChar)) {
//     alert("The character '" + inputChar + "' is a vowel.");
// } else {
//     alert("The character '" + inputChar + "' is not a vowel.");
// }


///////////////////////////////Question # 5//////////////////////////////////

// // Step a: Store correct password in a variable
// var correctPassword = "myPassword123";

// // Step b & c: Ask user to enter password and validate
// var userPassword = prompt("Enter your password:");

// // Step c.i: Check if user has entered a password
// if (!userPassword) {
//     alert("Please enter your password.");
// } else {
//     // Step c.ii: Check if both passwords are the same
//     if (userPassword === correctPassword) {
//         alert("Correct! The password you entered matches the original password.");
//     } else {
//         alert("Incorrect password.");
//     }
// }


///////////////////////////////Question # 6//////////////////////////////////


// var greeting;
// var hour = 13;

// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }

///////////////////////////////Question # 7//////////////////////////////////

// Prompt user to enter time in 24-hour format
var time = prompt("Enter time in 24-hour clock format (e.g., 1900 for 7pm):");

// Convert input to a number (if it's not already)
time = parseInt(time);

// Initialize a variable to hold the message
var message;

// Use if, else if, and else statements to determine the appropriate message
if (time >= 0 && time < 1200) {
    message = "Good morning!";
} else if (time >= 1200 && time < 1700) {
    message = "Good afternoon!";
} else if (time >= 1700 && time < 2100) {
    message = "Good evening!";
} else if (time >= 2100 && time <= 2359) {
    message = "Good night!";
} else {
    message = "Invalid input. Please enter a time in 24-hour format.";
}

// Display the message
console.log(message);
