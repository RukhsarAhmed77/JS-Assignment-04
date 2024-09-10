//JS Assignment 04 : IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITION

//Question no 01

// var A=65;
// var Z=90;
// var a=97;
// var z=122;

// var userinput = prompt("Enter keys to get ASCII  input from A,Z,a and z");

// if (userinput == "A" ) {
//     document.write("Your ASCII code" +" "+ A)
// }
// else if (userinput == "Z" ){
//     document.write("Your ASCII code" +" "+ Z)
// }
// else if (userinput == "a" ){
//     document.write("Your ASCII code" +" "+ a)
// }
// else if (userinput == "z" ){
//     document.write("Your ASCII code" +" "+ z)
// }
// else{
//     console.log("Error");
// }

//Question no 02

// var first_input = prompt("Enter your first input")
// var second_input = prompt("Enter your second input")

// if (first_input > second_input) {
//     Document.write("first integer is " ,first_input ," and second integer is ",second_input," and first Integer is greater than second integer ");
// }

// else if(second_input >= first_input){
//     document.write("First integer is " ,first_input ," and second integer is ",second_input," and second integer is greater then first Integer ");

// } 
// else{
//     console.log("error")
// }

//Question no 03

// var userinput = +prompt("Enter your Number");
// if (userinput === +userinput) {
//     document.write("Your Number is Positive")
// }
// else {
//     if (userinput === -userinput) {
//         document.write("Your Number is Negative")
//     }
// }

//Question no 04

// var char = prompt("Enter a character:");

// if (
//     char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
//     char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U'
// ) {
//     document.write(true);
//     console.log(true);
// } else {
//     document.write(false);
//     console.log(false);
// }

//Question no 05

// var correctPassword = "mySecret123";

// var userPassword = prompt("Enter your password:");

// if (!userPassword) {
//     console.log("Please enter your password");
// } else if (userPassword === correctPassword) {
//     console.log("Correct! The password you entered matches the original password.");
// } else {
//     console.log("Incorrect password");
// }

//Question no 06

// var hour = prompt("Enter the current hour (0-23):");
// var greeting;

// if (hour === null || hour === "") {
//     greeting = "Please enter current time";
// } else if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }

// console.log(greeting);

//Question no 07

// var time = prompt("Enter the time in 24-hour format (e.g., 1900 for 7 PM):");

// time = Number(time);

// var greeting;

// if (time >= 0 && time < 1200) {
//     greeting = "Good morning";
// } else if (time >= 1200 && time < 1700) {
//     greeting = "Good afternoon";
// } else if (time >= 1700 && time < 2100) {
//     greeting = "Good evening";
// } else {
//     greeting = "Good night";
// }

// document.write(greeting);
