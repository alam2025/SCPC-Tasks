
// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

const sumOfPositive=(array)=>{
  let positiveSum=0;

  for(let i=0;i<array.length;i++){
      const element =array[i];

      if(element >= 0){
            positiveSum += element;
      }
  }

  return positiveSum;
}
const sampleArray= [4,2,6,7,-12];

console.log(sumOfPositive(sampleArray));

