// Array.prototype.length will give you the number of top-level elements in an array.
// Your task is to create a function deepCount that returns the number of ALL elements within an array, including any within inner-level arrays.

const deepCount = (arr) => {
  return arr.reduce((acc, el) => {
    return acc + (Array.isArray(el) ? deepCount(el) : 0)
  }, arr.length)
}
