try {
    new error();
} catch (e) {
    console.log('错误了')
}

try {
    new error();
} catch {
    console.log('错误了2')
}