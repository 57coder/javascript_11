let getGlobal = function () {
    if (typeof self !== 'undefined') { return self; }
    if (typeof window !== 'undefined') { return window; }
    if (typeof global !== 'undefined') { return global; }
    thrownewError('unable to locate global object');
};
  
let _this = this;
let globalthis = this;
let globals = getGlobal();
// 而 globalThis 目的就是提供一种标准化方式访问全局对象，
// 有了 globalThis后，你可以在任意上下文，任意时刻都能获取到全局对象。