// Написать функцию, которая создает пустой объект, но без прототипа.

const createEmptyObject = () => Object.create(null)

console.log(createEmptyObject())