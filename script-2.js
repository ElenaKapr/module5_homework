let x = prompt ("Введите значение:");

if (x === null || x == "") {
    console.log ("Тип x не определён");
} else if (x === "true" || x === "false") {
    console.log ("X - логический тип");
} else if (x == x * 1) {
    console.log ("X - число");
} else {
    console.log ("X - строка");
}