// let user = {
//   level: 0
// }
let name = user || 0;
let level = `${user.level}级` ?? '暂无等级';
console.log(level);