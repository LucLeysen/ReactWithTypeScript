const numbers = [1, 3, 5];
numbers.push(7);
// 1 3 5 7
for (let i in numbers) {
    console.log(numbers[i]);
}
numbers.pop();
// 1 3 5
numbers.forEach(function (num) {
    console.log(num);
});
//# sourceMappingURL=arrays.js.map