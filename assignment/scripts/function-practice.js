console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return ('Hello ' + name + '!');
} //End hellName

// Remember to call the function to test
console.log('Test -', helloName('Connor'));
console.log(helloName('Ferris'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  let thirdNumber = firstNumber + secondNumber;
  // return firstNumber + secondNumber;
  return thirdNumber;
} //end addNumbers

console.log('Test - addNumbers 4 + 5 =', addNumbers(4,5));
console.log('Test - addNumbers 35 + -90 =', addNumbers(35,-90));

// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNumber, secondNumber, thirdNumber){
let fourthNumber = firstNumber * secondNumber * thirdNumber;
return fourthNumber;
} //end multiplyThree

//multiplyThree tests
console.log('Test - multiplyThree 2 * 3 * 4 =', multiplyThree(2,3,4));
console.log('Test - multiplyThree 3 * -4 * 5 =', multiplyThree(3,-4,5));
console.log('Test - multiplyThree -1 * -2 * 3 =', multiplyThree(-1,-2,3));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
  else {
    return false;
  }
} //end isPositive

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );
console.log( 'isPositive - should say true', isPositive(.005));


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  if(array.length > 0) {
    return array[array.length - 1];
  }
  else {
   return undefined;
  }
} //end getLast

//getLast Test cases
let firstName = ['Connor'];
let names = ['Connor', 'Consolino', 'Ferris',]
let noName = [];

console.log('Test getLast should say Connor -', getLast(firstName));
console.log('Test getLast should say Ferris -',  getLast(names));
console.log('Test getLast should say undefined -', getLast(noName));



// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

function find( value, array ){
  if(array.length > 0) {
    for (let index of array) {
      //console.log('index is', index);
      if (index == value) {
        return true; //return true if value is found.
      }
    } //end for of
    return false; //return false if no values found.
  } //end if get last
  else {
  return false; //return false if array is empty
  } //end else if getLast Fails
} //end find

//test cases
console.log('Test find Connor find should say true -', find('Connor', firstName));
console.log('Test find Connor find should say true -', find('Connor', names));
console.log('Test find Consolino find should say true -', find('Consolino', names));
console.log('Test find Ferris  find should say true -', find ('Ferris', names));
console.log('Test find Connor find should say false -', find('Connor', noName));
console.log('Test find Hank find should say false -', find('Hank', firstName));
console.log('Test find Hank find should say false -', find('Hank', names));
console.log('Test find Hank find should say false -', find('Hank', noName));
console.log('Test find Marty find should say false -', find('Marty', names));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

function positiveNumbersArray (inputArray) {
  let newArray = [];
  for (let value of inputArray) {
    if (value > 0) {
      newArray.push(value);
    }
  }
  return newArray;
}

let testArray1 = [1, 3, -6, 5, 0, -8, 9];
let testArray2 = [0, -1, -2, -8];

console.log('Test positiveNumbersArray testArray1, new array is', positiveNumbersArray(testArray1), 'original array is', testArray1);
console.log('Test positiveNumbersArray testArray2, new array is', positiveNumbersArray(testArray2), 'original array is', testArray2);



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
/* I chose the Problem Sum of Resistance Series in circuits https://edabit.com/challenge/JDkyQJqNfJNhvjmRW
*/

let seriesResistance1 = [1, 5, 6, 3] //"15 ohms"

let seriesResistance2 = [16, 3.5, 6] // "25.5 ohms"

let seriesResistance3 = [0.5, 0.5] // "1.0 ohm"

function sumResistance (resistanceArray) {
  let RT = 0;
  for (let resister of resistanceArray) {
    RT += resister;
  }
  if (RT > 1)
  {
    return RT + ' ohms';
  }
  else {
    return RT + ' ohm';
  }
}

console.log('Test sumeResistance1', sumResistance(seriesResistance1));
console.log('Test sumeResistance1', sumResistance(seriesResistance2));
console.log('Test sumeResistance1', sumResistance(seriesResistance3));