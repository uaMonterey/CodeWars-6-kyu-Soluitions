function revrot(str, sz) {
  // your code
  if (sz <= 0 || str === '' || sz > str.length) {
    return ''
  }
  let result = ''
  let count = 0
  let count2 = 0
  let chunk1 = str.substr(0, 6)
  let chunk2 = str.substr(6)

  for (let i = 0; i < chunk1.length; i++) {
    count += i
  }

  if (count % 2 !== 0) {
    result = chunk1.split('').slice(1).concat(chunk1[0]).join('')
  } else {
    result = chunk1.split('').reverse().join('')
  }

  if (chunk2 < sz) {
    return result
  } else {
    for (let i = 0; i < chunk2.length; i++) {
      count2 += i
    }
    console.log(count2)
    if (count2 % 2 !== 0) {
      result = result + chunk2.split('').slice(1).concat(chunk2[0]).join('')
    } else {
      result = result + chunk2.split('').reverse().join('')
    }
  }

  return result
}
