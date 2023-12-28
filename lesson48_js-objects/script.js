// создание объекта

const userInfo2 = new Object();

const userInfo1 = {}; // чаще используется

let firstPart = "second";
const userInfo = {
    name: "Денис",
    age: 40,
    "likes javascript": true,
    2: 25,
    [firstPart + " time"]: 'tram-pam-pam', //*пробелы дб такие же
    [firstPart]: "super", // ключ в виде переменной
    address: {
        city: 'NN',
        street: 'Freedom',
        rooms: {
            1: 'Кухня',
            2: 'Зал',
            3: 'Туалет'
        }
    }
};

// console.log(userInfo);
console.log(userInfo.name);
console.log(userInfo["likes javascript"]);
console.log(userInfo[2]);
console.log(userInfo['2']);
console.log(userInfo["second time"]);//*пробелы дб такие же
console.log(userInfo[firstPart]);

//приимущества [] при обращении к значениею

let key = "name";

console.log(userInfo.key); // --> undefined
console.log(userInfo[key]); // --> Денис

// Обращение к вложенным объектам
console.log(userInfo.address);
console.log(userInfo.address.street);
console.log(userInfo.address.rooms[2]);

// Свойство из переменной

function makeUserInfo(name, age) {
    return {
        name, // Тоже самое что и name: name,
        age, // Тоже самое что и age: age,
    };
}

let user = makeUserInfo('Denis', 40);
console.log(user);

/// Изменение объекта
const userInfo4 = {
    name: 'Denis',

}
console.log(userInfo4);

// Добавление новых свойств
userInfo4.age = 30;
console.log(userInfo4);

userInfo4['like js'] = 'do js';
console.log(userInfo4);

userInfo4.address = {
    city: 'Pupovo',
    street: 'Tupovo'
}
console.log(userInfo4);

// Удаление свойств
delete userInfo4.address;
console.log(userInfo4);

delete userInfo4['like js'];
console.log(userInfo4);

//Изменение свойства
userInfo4.age = 25;
console.log(userInfo4);

// Копирование объекта (при копировании сам объект не дублируется, а копируется ссылка на объект)
let userDate = userInfo4;

console.log(userDate);

userDate.age = 18;

console.log(userInfo4);

// Дублирование объекта (Object.assign)
//Синтаксис: Object.assign(куда(объект), что(свойство #1), что(свойство #2) ....)
let user1 = Object.assign({}, userInfo4);

user1.age = 11;
console.log(userInfo4);
console.log(user1);

//Добавление новых свойств в объект через Object.assign
Object.assign(userInfo4, { ['new value']: 'new1', city: 'NN', 2: 456} );
console.log(userInfo4);

/// Проверка наличие свойства в объекте

if (userInfo4.kran) {
    console.log(userInfo4.kran);
}
// Проверка наличие свойства в объекте. Опциональная цепочка
userInfo4.address = {
    city: 'Pupovo',
    street: 'Tupovo'
}

console.log(userInfo4.address.city);

console.log(userInfo4?.address?.cityyy);

// Проверка наличие свойства в объекте. Оператор in - используется в случаях, когда значение свойства равно undefined

if ('name' in userInfo4) {
    console.log(userInfo4.name);
}

/// Цикл for in

for (let key in userInfo4) {
    console.log(key);
    console.log(userInfo4[key]);
}

// для вложенного объекта

for (let key in userInfo4.address) {
    console.log(key);
    console.log(userInfo4[key]);
};

///Методы объекта, прописываются внутри объекта

const userInfo5 = {
    name: 'Denis',
    age: 11,
    address: {
        city: 'Pupovo',
        street: 'Tupovo'
    },

    // showInfo: function () { // метод функции
    //     console.log(`${userInfo4.name}, ${userInfo4.age} лет. Адрес: г.${userInfo4.address.city}, ул.${userInfo4.address.street}`);
    // },
    showInfo() { // метод функции
        console.log(`${userInfo5.name}, ${userInfo5.age} лет. Адрес: г.${userInfo5.address.city}, ул.${userInfo5.address.street}`);
    } 
}

userInfo5.showInfo(); // вызов метода функции

// Использование this - указывает на текущий объект

const userInfo6 = {
    name: 'Denis',
    age: 11,
    address: {
        city: 'Pupovo',
        street: 'Tupovo'
    },

    showInfo() { // метод функции

        // **function show() {
        //     console.log(`${this.name}, ${this.age} лет. Адрес: г.${this.address.city}, ул.${this.address.street}`);
        // }
        console.log(`${this.name}, ${this.age} лет. Адрес: г.${this.address.city}, ул.${this.address.street}`);

        // show(); // **вызов данного метода приведет к ошибке, т.к. this пытается найти элементы в родительской функции show(), но их там нет.
        // Но если функцию show() переписать в виде стрелочной функции, то она сработает, т.к. у стрелочной функции нет своего this, и оно берет значения из внешнего метода

        let show = () => console.log(`${this.name}, ${this.age} лет. Адрес: г.${this.address.city}, ул.${this.address.street}`);

        show();
    }
}

userInfo6.showInfo(); // вызов метода функции

/// Функция-конструктор
/*Функция-конструктор это обычная функция, но есть два правила:
1. Имя функции-конструктора должно начинаться с большой буквы
2. Функция-конструктор должна вызываться при помощи оператора 'new'*/

function UserInfo(name) {
    // this = {}; создается пустой объект (неявно)

    this.name = name;
    this.age = 30;

    // return this; Возвращается объект (неявно)
}

console.log(new UserInfo('Вася'));
console.log(new UserInfo('Лена'));