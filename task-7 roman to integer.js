// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.


const romanToIntger = function (s) {
      let map = { "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000 };
      let result = 0;

      for (let i = 0; i < s.length; i++) {
            let curr = map[s[i]];
            let next = map[s[i + 1]];

            if (curr < next) {
                  result += next - curr;
                  i++;
            } else {
                  result += curr;
            }
      }

      return result;
};


const romanNumeral2 = "XXI";

const integerValue = romanToIntger(romanNumeral2);

console.log(`The corresponding integer value of "${romanNumeral2}" is: ${integerValue}`);