var arr = [1, 1, 1, 2];
function foo(a) {
    return !a.some(function(b) {
    return b !== a[0]
    })
};
console.log(foo(arr));
