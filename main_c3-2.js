// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет, есть
// ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

const testObject = {
    testProperty1: 1,
    testProperty2: 2,
    TestProperty3: 3
}

const testObjectKey= (testString, sourceObject) => testString in sourceObject

console.log(`Запрашиваемый ключ ${testObjectKey('testProperty2', testObject)?'':'не '}является свойством объекта`);