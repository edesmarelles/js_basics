let input = "turpentine and turtles";
const vowels = ["a", "e", "i", "o", "u"];
const resultArray = [];

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
      if (input[i] === vowels[1]) {
        resultArray.push(input[i]);
        if (input[i] === vowels[4]) {
          resultArray.push(input[i]);
        }
      }
    }
  }
}

const resultString = console.log(resultArray.join().toUpperCase());
