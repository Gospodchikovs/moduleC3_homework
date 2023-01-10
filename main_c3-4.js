// Реализовать следующее консольное приложение подобно примеру, который разбирался в видео.
// Реализуйте его на прототипах.
// Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность.
//
// Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте,
// какими свойствами он обладает.
//
// План:
//
// - Определить родительскую функцию с методами, которые включают/выключают прибор из розетки.
// - Создать делегирующую связь [[Prototype]] для двух конкретных приборов.
// - У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
// - Создать экземпляры каждого прибора.
// - Вывести в консоль и посмотреть результаты работы, гордиться собой :)
// - Общие требования:
//
// Имена функций, свойств и методов должны быть информативными
// Соблюдать best practices:
// - использование camelCase нотации для переменных и методов,PascalCase — для названий функций-конструкторов и классов;
// - информативные имена;
// - четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр конкретную реализацию);
// - использование синтаксиса ES6 (кроме функции-конструкторов) и т.д.

function ElectricityEquipment(name, power) {
    this.name = name;
    this.power = power;
    this.isOff = true
}

ElectricityEquipment.prototype.getName = function() {   // получение имени прибора
    return this.name
}

ElectricityEquipment.prototype.on = function() {        // включение прибора
    this.isOff = false;
    console.log(`Прибор ${this.name} включен`)
}

ElectricityEquipment.prototype.off = function() {       // выключение прибора
    this.isOff = true;
    console.log(`Прибор ${this.name} выключен`)
}

ElectricityEquipment.prototype.getPower = function() {  // получение мощности прибора
    return this.power
}

function Lamp(name, power, color) {                     // лампа
    this.color = color;
    this.name = name;
    this.power = power
}

Lamp.prototype = new ElectricityEquipment();

Lamp.prototype.getColor = function() {                  // получение цвета лампы
    return this.color
}

function Computer(name, power, screen) {                // компьютер
    this.screen = screen;
    this.name = name;
    this.power = power;
}

Computer.prototype = new ElectricityEquipment();

Computer.prototype.getScreen = function getScreen() {   // получение размера экрана
    return this.screen
}

const lamp1 = new Lamp('Настольная лампа', 30, 'белый');
const lamp2 = new Lamp('Настенная лампа', 35, 'черный');
const comp1 = new Computer('Laptop HP20192', 200, 14);
const comp2 = new Computer('Настольный компьютер', 350, 21);

lamp1.on();
lamp2.on();
comp1.on();
comp2.on();
lamp1.off();
lamp2.off();
comp1.off();
comp2.off();

console.log(`Имя лампы мощностью ${lamp1.getPower()} Вт c цветом ${lamp1.getColor()} - ${lamp1.getName()} `);
console.log(`Имя лампы мощностью ${lamp2.getPower()} Вт c цветом ${lamp2.getColor()} - ${lamp2.getName()} `);
console.log(`Имя компьютера мощностью ${comp1.getPower()} c экраном ${comp1.getScreen()}" - ${comp1.getName()}`);
console.log(`Имя компьютера мощностью ${comp2.getPower()} c экраном ${comp2.getScreen()}" - ${comp2.getName()}`);
