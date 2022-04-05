let value = +prompt ("Введите число:");

if (isNaN (value) === true) {
    console.log ("Упс, кажется, вы ошиблись");
} else if (typeof (value) === "number") {
    if (value % 2 === 0) {
        console.log ("Число четное");
    }
    else {
        console.log ("Число нечетное");
    }
} else {
    console.log ("Упс, кажется, вы ошиблись");
}