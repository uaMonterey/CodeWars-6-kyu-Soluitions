// Nextel phones have phone number and ID number known as Nextel ID your task is to validate any Nextel ID.

// You can search online for examples but to save you some time here are some examples.

// Valid IDs:

// 72 * 673639 * 2
// 52 * 50875 * 12
// 30 * 5 * 547604
// 3 * 05 * 547604
// 6235 * 1 * 5292
// Non Valid IDs:

// 72 * 673639 * 22
// 72 * 6736392 *
// 72 * 673 * 639 * 2
// Extra hints:

// valid numbers can have any number of spaces between asterisks and numbers, at the beginning or at the end

const isValidNextelPhoneNumber = str => {
  let check = str.replace(/[**]/gi, ' ').split('').some(el => isNaN(el));
  let y = str.indexOf('*');
  str = str.split(' ').join('');
  x = str.split('').reduce((acc, el) => (el === '*' ? acc + 1 : acc + 0), 0);
  
  return x === 2 && str[y] !== str[y+1] && y >= 1 && !check ? true : false
}