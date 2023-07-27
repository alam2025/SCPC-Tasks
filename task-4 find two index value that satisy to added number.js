// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.
const calculateTargetNumber = (inputArray, target) => {
      const indexes=[]
      for (i = 0; i < inputArray.length; i++) {
        const remain = target - inputArray[i];
        if(remain in inputArray){
            return[i, inputArray.indexOf(remain)];
           
        }
      }

      return[]
}

const inputArray = [1, 2, 3, 4, 5, 6, 7, 8];
const targetValue = 10;
const output= calculateTargetNumber(inputArray, targetValue);
console.log(output);
