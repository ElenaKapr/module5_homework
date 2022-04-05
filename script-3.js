let string = prompt ("Введите строку:");
let result = "";

for (let i = 0; i < string.length; i++) {
    result = string.slice (i, i + 1) + result;
}

console.log (result);