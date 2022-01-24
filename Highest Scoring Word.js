// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

// #1
function high(x) {
  let wordsArray = x.toLowerCase().split(' ');
  let highSum = 0;
  let highWord = '';

  for (let i = 0; i < wordsArray.length; i += 1) {
    let highSumOfLetters = 0;

    let wordOfArray = wordsArray[i];

    for (let j = 0; j < wordOfArray.length; j += 1) {
      highSumOfLetters = highSumOfLetters + (wordOfArray.charCodeAt(j) - 96);

      if (highSumOfLetters > highSum) {
        highSum = highSumOfLetters;
        highWord = wordOfArray;
      }
    }
  }
  return highWord;
}

//#2
function high(str) {
  const highSum = str =>
    str
      .toLowerCase()
      .split('')
      .reduce((acc, el) => acc + el.charCodeAt(0) - 96, 0);
  return str
    .toLowerCase()
    .split(' ')
    .reduce((box, item) => (highSum(box) < highSum(item) ? item : box));
}
