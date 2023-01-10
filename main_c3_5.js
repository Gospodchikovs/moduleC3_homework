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
// - Вывести в консоль и посмотреть результаты работы, гордитьсяgit  собой :)
// - Общие требования:
//
// Имена функций, свойств и методов должны быть информативными
// Соблюдать best practices:
// - использование camelCase нотации для переменных и методов,PascalCase — для названий функций-конструкторов и классов;
// - информативные имена;
// - четкая связь между классом и его экземплярами (классgit  описывает множество, а экземпляр конкретную реализацию);
// - использование синтаксиса ES6 (кроме функции-конструкторов) и т.д.

class ElectricityEquipment {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.isOff = true;
    }

    getName() {                                     // получение имени прибора
        return this.name
    }

    on() {
        this.isOff = false;
        console.log(`Прибор ${this.name} включен`)  // включение прибора
    }

    off() {
        this.isOff = true;
        console.log(`Прибор ${this.name} выключен`) // выключение прибора
    }

    getPower() {                                    // получение мощности прибора
        return this.power
    }
}

class Lamp extends ElectricityEquipment {           // лампа
    constructor(name, power, color) {
        super(name, power);
        this.color = color;
    }

    getColor() {                                    // получение цвета лампы
        return this.color;
    }
}

class Computer extends ElectricityEquipment {       // компьютер
    constructor(name, power, screen) {
        super(name, power);
        this.screen = screen;
    }

    getScreen() {                                   // получение размера экрана
        return this.screen
    }
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
