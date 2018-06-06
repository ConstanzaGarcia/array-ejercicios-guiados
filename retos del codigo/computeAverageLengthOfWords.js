const computeAverageLengthOfWords = (word1, word2) => {
    // your code here
    let codeSize1 = word1.length;
    let programsSize2 = word2.length;
    const result = (codeSize1 + programsSize2) / 2;

    return result;
  }

let output = computeAverageLengthOfWords('code', 'programs');
console.log(output); // --> 6

module.exports = computeAverageLengthOfWords;

