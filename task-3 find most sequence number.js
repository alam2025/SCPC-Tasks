// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

const mostFrequentElement = (inputArray) => {
     let maxCount=0;
     let maxElement= inputArray[0]
      for (i = 0; i < inputArray.length; i++) {
            let c=0;
             const inputItem= inputArray.map(array=>{
                  if(inputArray[i] === array){
                        c++;
                  }

                  return c;
             } )

             if(c > maxCount){
                  maxCount=c;
                  maxElement= inputArray[i];
             }
      }

      return [maxCount, maxElement]
}

const inputElement = [2, 3, 54, 3, , 3, 3, 4, 5, , 3, 3, 2, ,2];
const [maxCount,maxElement] = mostFrequentElement(inputElement);
console.log(` Max frequent Element is ${maxElement} . Number of ${maxCount} times. `);

