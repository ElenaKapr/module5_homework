let arr = [5, 5, 5, 5]
let flag = true;

for (let i = 1; i < arr.length; i++) {
    if (arr[i-1] !== arr[i]) {
        flag = false;
        break;
    }
}

if (flag === true) {
    console.log("Все элементы массива равны");
} else {
    console.log("В массиве хранятся различные элементы");
}