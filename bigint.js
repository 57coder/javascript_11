console.log(Number.MAX_SAFE_INTEGER);

// 超过范围的两个不同的值，却返回了true
console.log(9007199254740992 === 9007199254740993) // -> true

// 为解决此问题，ES2020 提供一种新的数据类型：BigInt。使用 BigInt 有两种方式：
// 1、在整数字面量后面加n
let bigIntNum = 9007199254740993n;
// 2、使用 BigInt 函数。
let bigIntNum = BigInt(9007199254740);
let anOtherBigIntNum = BigInt('9007199254740993');

// console.log(9007199254740993n + 9007199254740993n);

// BigInt 是一种新的数据原始（primitive）类型。
typeof 9007199254740993n;
