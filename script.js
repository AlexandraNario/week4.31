/* define a function calculateAverage
Define a global variable that holds an array of numbers 
calculateAverage will take in the array of numbers as a parameter 
Return the average of all the numbers in the array 
Use 2 variables local to calculateAverage 
Test your function by logging it’s returned value to the console
*/
//parameters
//returns
//examples
//psuedocode

//function called calculateAverage,take an array of numbers, 
//use a global variable that will hold an array of numbers, 
//use two local variables within calculateAverage
//Return the average of all the numbers in the array
//[1,2,3,4,5] = 3
//[2,3,4,5,6] = 4]

//iterate over the array, using a for loop. We need to track the length of the array fo we don't overshoot, so we'll use the length as a constraint, and increment our contol variable(usually 'i') so that we can stop the loop
//inside we'll create local variables
//as we loop, each number in the array will add to the sum
// at the end of the loop we will ise the sume to divide by the length, which will give us the average
//console the return value (average)
// [i] is the index of the array
const numbersArray = [1, 2, 3, 4, 5];
const arraynum = [20, 30, 40, 50]

function calculateAverage(arrayOfNumbers) {
  if(arrayOfNumbers.length === 0){
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    sum += arrayOfNumbers[i]; //arrayOfNumbers[1]= sum + 2
  }
  const average = sum / arrayOfNumbers.length;

  console.log(average);
  
  return average;
}

calculateAverage(numbersArray);//pass it is a parameter its 3
calculateAverage(arraynum);//35
