// Array.prototype.flat()

const nestedArr = [1, 2, [3, 4, [5, 6, [7, [8], 9]]], 10]
console.log(nestedArr.flat())
// [1, 2, 3, 4, [5, 6, [7, [8], 9]], 10]
console.log(nestedArr.flat(2))
// [1, 2, 3, 4, 5, 6, [7, [8], 9], 10]
console.log(nestedArr.flat(3))
// [1, 2, 3, 4, 5, 6, 7, [8], 9, 10]
console.log(nestedArr.flat(4))
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(nestedArr.flat(Infinity))
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

