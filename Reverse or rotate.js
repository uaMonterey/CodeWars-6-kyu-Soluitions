// The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

// If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

// If

// sz is <= 0 or if str is empty return ""
// sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".

function revrot(str, sz) {
  if (sz <= 0 || str === '' || sz > str.length) {
    return ''
  }

  let chunks = Math.floor(str.length / sz)

  let arr = str.split('')
  const arrChunks = []

  for (let i = 0; i < chunks; i++) {
    arrChunks.push(arr.splice(0, sz))
  }

  return arrChunks.reduce((acc, el) => {
    let res = ''
    let count = el.reduce((count, item) => (count += +item), 0)
    if (count % 2 !== 0) {
      res = el.slice(1).concat(el[0]).join('')
    } else {
      res = el.reverse().join('')
    }

    return acc + res
  }, '')
}
