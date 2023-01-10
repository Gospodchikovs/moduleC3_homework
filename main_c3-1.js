// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения
// только собственных свойств. Данная функция не должна возвращать значение.

const testObject = {
    testProperty1: 1,
    testProperty2: 2,
    TestProperty3: 3
}

function getObject(sourceObect) {
    for (let key in sourceObect) {
        if (sourceObect.hasOwnProperty(key)) {
            console.log(`Ключ: ${key} Значение: ${sourceObect[key]}`)
        }
    }
}

getObject(testObject)