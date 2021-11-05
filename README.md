# ES 新特性

- [javascript_11](#javascript_11)
- [javascript_12](#javascript_12)

## javascript_11

新发布的 es11 一些新特性，主要包含以下新特性

- [Promise.allSettled](#promiseallsettled)
- [BigInt](#bigint)
- [String.prototype.matchAll](#stringprototypematchall)
- [globalThis](#globalthis)
- [可选链](#可选链)
- [聚合导出](#聚合导出)
- [空值合并运算符](#空值合并运算符)
- [dynamic-import](#dynamic-import)

### Promise.allSettled

它可以用在处理所有的 promise 都 settled 的情况，无论结果是 fulfilled 还是 rejected. 你看 ，无需 catch!

```js
Promise.allSettled([
  Promise.reject({ code: 500, msg: "服务异常" }),
  Promise.resolve({ code: 200, list: [] }),
  Promise.resolve({ code: 200, list: [] }),
]).then((ret) => {
  /*
        0: {status: "rejected", reason: {...}}
        1: {status: "fulfilled", value: {...}}
        2: {status: "fulfilled", value: {...}}
    */
  // 过滤掉 rejected 状态，尽可能多的保证页面区域数据渲染
  ret.filter((el) => {
    return el.status !== "rejected";
  });
  console.log(ret);
});
```

#### BigInt

任意精度整数，可以通过 BigInt 方法，或是在一个数值后添加 n 后缀，来将一个 number 转换为 bigint 类型。

```js
Number.MAX_SAFE_INTEGER;
// 9007199254740991
Number.MAX_SAFE_INTEGER + 10 - 10;
// 9007199254740990  精度丢失
BigInt(Number.MAX_SAFE_INTEGER) + 10n - 10n;
// 9007199254740991n  计算结果为 bigint 类型
```

#### String.prototype.matchAll

字符串实例的 matchAll 方法接收正则或者字符串，会返回一个迭代器，迭代器的每次执行，都会返回一匹配项以及相应的匹配信息。我们可以遍历迭代器，去拿到所有的结果

```js
var str = "<div>JS</div><div>正则</div>";
var allMatchs = str.matchAll(/<\w+>(.*?)<\/\w+>/g);

for (const match of allMatchs) {
  console.log(match);
}

/*
第一次迭代返回：
[
    "<div>JS</div>",
    "JS",
    index: 0,
    input: "<div>JS</div><div>正则</div>",
    groups: undefined
]
第二次迭代返回：
[
    "<div>正则</div>",
    "正则",
    index: 15,
    input: "<div>JS</div><div>正则</div>",
    groups: undefined
]
*/
```

### globalThis

因为 js 有不同的运行环境，不同的运行环境有不同的全局对象，比如在 node 里面是 global，在浏览器是 window 或者 self，为了统一获取全局对象的方式，就有了 globalThis。globalThis 指向的对象和各环境的全局对象是一样的，只是规范获取方式。

```js
globalThis; //window(浏览器环境)
```

### 可选链

在用对象点出属性或者方法的时候，如果嵌套的话，可能会出现中间某个对象是 undifined，导致代码报错。为了代码的健壮性，我们经常用&&来规避，比如这样：

```js
a && a.b && a.b();

// 现在写法
a?.b?.();
// 数组可以看成特殊的对象，取数组成员时也用?.
b?.[1]?.ccc;
// 空值合并运算符结合可选链，我们可以很方便的给一个变量赋值，以及如果赋值失败赋值上默认值
const a = b?.c?.d ?? "";
```

### 聚合导出

```js
// 关于import，我们可以这样导入所有成员：
import * as MyModule from "...";
export { MyModule };
```

### 空值合并运算符

空值合并运算符(??)和之前的或(||)操作符有点像。不同的是，或是在左边的表达式为假值(false,0,"",NaN,null,undefined)时，取右边的值，而空值合并运算符，是在左边的表达式为空值（null,undifined）时取右边的值。

```js
const a = 0;
const b = false;
const c = null;
const d = undefined;
console.log(a || b); //false
console.log(a ?? c); //0
console.log(c ?? d); //undefined
```

### dynamic-import

动态加载，Import（src）返回的是一个 promise 对象，所以可以用 await 或者注册回调来处理

```js
async function fn() {
  const a = await import("./test.js");
  import("./test.js").then((module) => {
    //
  });
}
```

## javascript_12

新发布的 es12(2021.6) 一些新特性，主要包含以下新特性

- [String.prototype.replaceAll](#String.prototype.replaceAll)
- [Promise.any](#Promise.any)
- [??= &&= ||=](#??=&&=||=)
- [WeakRef](#WeakRef)
- [数字分隔符](#数字分隔符)

### String.prototype.replaceAll

replaceAll 是返回一个全新的字符串，所有符合匹配规则的字符都将被替换掉，替换规则可以是字符串或者正则表达式。

```js
let string = "I like you, you like me";

//使用replace
let replaceStr = string.replace("like", "love");
console.log(replaceStr); // 'I love you, you love me'

//replace使用正则匹配所有
console.log(string.replace(/like/g, "love")); // 'I love you, you love me'

//使用replaceAll
let replaceAllStr = string.replaceAll("like", "love");
console.log(replaceAllStr); // 'I love you, you love me'
```

> 注意：replaceAll 在使用正则表达式的时候，如果非全局匹配（/g），则 replaceAll()会抛出一个异常

```js
let string = "I like you, you like me";
console.log(string.replaceAll(/like/, "love")); //TypeError
```

### Promise.any

当 Promise 列表中的任意一个 promise 成功 resolve 则返回第一个 resolve 的结果状态
如果所有的 promise 均 reject，则抛出异常表示所有请求失败

```js
Promise.any([
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("500");
    }, 500);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("1000");
    }, 1000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("2000");
    }, 2000);
  }),
])
  .then((value) => console.log("value", value))
  .catch((err) => console.log("err", err));

//输出 value 1000
```

### ??= &&= ||=

??= ：当 L 值为 null 或者 undefined 时，将 R 变量赋值给 L
||=：当 L 值不存在时，将 R 变量赋值给 L
&&=：当 L 值存在时，将 R 变量赋值给 L

```js
const animal = [
  {
    name: "tim",
    age: 12,
  },
  {
    name: "tom",
  },
];

for (const item of animal) {
  item.age ??= 18;
  item.age ||= 18;
  item.age &&= 18;
}
console.log(animal);
```

### WeakRef

WeakRef 对象允许操作者保留对另一个对象的弱引用，而不会阻止被弱引用对象被 GC 回收(能不使用就尽量不要使用)

> Why: GC 在一个 JavaScript 引擎中的行为有可能在另一个 JavaScript 引擎中的行为大相径庭，或者甚至在同一类引擎，不同版本中 GC 的行为都有可能有较大的差距。GC 目前还是 JavaScript 引擎实现者不断改进和改进解决方案的一个难题。

### 数字分隔符

可以在数字之间创建可视化分隔符，通过_下划线来分割数字，使数字更具可读性

```js
const money = 1_000_000_000;
//等价于
const money = 1000000000;
```
