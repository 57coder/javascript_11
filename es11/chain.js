var name = user && user.info && user.info.name;
var age = user && user.info && user.info.getAge && user.info.getAge();
// Uncaught TypeError: Cannot read property...
var name = user?.info?.name;
var age = user?.info?.getAge?.();

// 可选链中的 ? 表示如果问号左边表达式有值, 就会继续查询问号后面的字段。