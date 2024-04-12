const arr = [3, 0, 1, 2, 7, 9, 8, 4, 5, 152, null, 11, 6, 0];
let item = 0;
let itemOdd = 0;
let itemEven = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
    item++;
    }
    if (typeof arr[i] === 'number', arr[i] > 0) {
    if (arr[i] % 2) {
    itemOdd++
        } else {
    itemEven++
        }
    }
};
console.log("Количество нулей: " + item);
console.log("Количество нечетных чисел: " + itemOdd);
console.log("Количество четных чисел: " + itemEven);
