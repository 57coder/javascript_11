var str = '<text>JS</text><text>正则</text>';
var allMatchs = str.matchAll(/<\w+>(.*?)<\/\w+>/g);

for (const match of allMatchs) {
  console.log(match);
}

/*
第一次迭代返回：
[
    "<text>JS</text>",
    "JS",
    index: 0,
    input: "<text>JS</text><text>正则</text>",
    groups: undefined
]

第二次迭代返回：
[
    "<text>正则</text>",
    "正则",
    index: 15,
    input: "<text>JS</text><text>正则</text>",
    groups: undefined
]
*/