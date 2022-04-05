let newMap = new Map();

newMap.set('key1', 'value1');
newMap.set('key2', 'value2');
newMap.set('key3', 'value3');
newMap.set('key4', 'value4');
newMap.set('key5', 'value5');

newMap.forEach ((value, key, map) => {
    console.log(`Ключ - ${key}, значение - ${value}`);
})