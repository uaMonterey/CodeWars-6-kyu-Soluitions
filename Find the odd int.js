// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// 1
function findOdd(arr) {
  return arr.find((item) => arr.filter(el => el == item).length % 2)
}

//2
function findOdd(A) {
  let arr = A.reduce((accum, num) => ({
      ...accum,
      [num]: accum[num] ? accum[num] + 1 : 1,
    }),
    {},
  )
  let num = Object.entries(arr).map(el => el[1]).filter(el => el % 2  !== 0).join()
 let index =  Object.entries(arr).map(el => el[1]).indexOf(+num)
 let arr1 = Object.entries(arr)
 let maxnum = +arr1[index][0]

 return maxnum
}