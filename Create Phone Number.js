// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

function createPhoneNumber(number) {
  return number.reduce((acc, el) => acc.replace('x', el), '(xxx) xxx-xxxx')
}
