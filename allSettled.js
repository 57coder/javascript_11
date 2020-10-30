Promise.allSettled([
    Promise.reject({code: 500, msg: '服务异常'}),
    Promise.resolve({ code: 200, list: []}),
    Promise.resolve({code: 200, list: []})
])
.then((ret) => {
    /*
        0: {status: "rejected", reason: {...}}
        1: {status: "fulfilled", value: {...}}
        2: {status: "fulfilled", value: {...}}
    */
    // 过滤掉 rejected 状态，尽可能多的保证页面区域数据渲染
    ret.filter((el) => {
        return el.status !== 'rejected';
    });
    console.log(ret);
});