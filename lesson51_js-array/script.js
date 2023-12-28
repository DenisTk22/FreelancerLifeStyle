/// Объявление массивов. Массив это тоже объект
const arr1 = new Array(); // используется редко
const arr = [];

const arrOne = ['Ваня', 'Денис', 'Оля',];

const arrTwo = [
    'Лена',
    {
        type: 'JS',
        age: 36
    },
    true,
    function() {
        console.log('Привет, я Денис!');
    }
];

//Многомерный массив

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

/// Получение значений

console.log(arrTwo);
console.log(arrTwo[0]);
console.log(arrTwo[1].type); // обращение к значению объекта в массиве через ключ
arrTwo[3](); // вызов функции из массива через ключ

console.log(matrix);
console.log(matrix[0][1]);

console.log(arrTwo.length); // получение длины массива

/// Доступ к массиву

console.log(arrOne);

let arrNew = arrOne;

arrNew.length = 2; // можно укоротить массив

console.log(arrNew);
console.log(arrOne); // тоже будет укорочен

/// Изменение значений

arrOne[0] = 'Оксана'; // меняем существующее значение
console.log(arrOne);

arrOne[2] = 'Наташа'; // добавляем новое значение
console.log(arrOne);

/// МЕТОДЫ МАССИВОВ

// ОЧЕРЕДЬ поддерживает два вида операций:
//1. добавление элемента в конец очереди
//2. удаление элемента в начале, сдвигая очередь, так что второй элемент становится первым

// СТЕК поддерживает два вида операций:
//1. добавление элемента в конец
//2. удаление последнего элемента

// Массивы в JS могут работать и как очередь и как стек

/// *Метод PUSH* - добавляет элемент в конец массива

arrOne.push('Дима', 'Ирина'); // выполняется быстро
console.log('Прибавили два последних элемента методом push:');
console.log(arrOne);

/// *Метод SHIFT* - удаляет первый элемент в массиве, второй становитяс первым

arrOne.shift(); // выполняется медленно
console.log('Удалили первый элемент массива методом shift:');
console.log(arrOne);

/// *Метод POP* - удаляет последний элемент в массиве

arrOne.pop(); // выполняется быстро
console.log('Удалили последний элемент массива методом pop:');
console.log(arrOne);

/// *Метод UNSHIFT* - добавляет элементы в начало массива, сдвигая другие элементы

arrOne.unshift('Женя', 'Татьяна'); // выполняется медленно
console.log('Добавили элементы в начало массива методом unshift:');
console.log(arrOne);

// Удаление/добавление/изменение конкретных элементов

delete arrOne[1]; // delete удаляет элемент, но не освобождает его место, оно становится пустым, длина массива при этом не меняется
console.log(arrOne);

/// *Метод SPLICE* - удаляет указанные элементы

arrOne.splice(1, 2); // удаляет с 1го индекса два элемента
console.log(arrOne);

let removed = arrOne.splice(1, 1); // удаленные элементы можно добавить в переменную
console.log(removed);
console.log(arrOne);

arrOne.splice(1, 1, 'Денис'); // удалит и заменит на указанный элемент
console.log(arrOne);

arrOne.splice(1, 0, 'Ира', 'Настя'); // добавит указанные элементы с 1го индекса, обязательно 0, отодвинув другие элементы
console.log(arrOne);

arrOne.splice(-1, 1); // удаляет указанные элементы с последней позиции, обязательно -1, отодвинув другие элементы
console.log(arrOne);

/// *Метод SLICE* - создает новый массив, в который копирует чать или весь массив
// Синтаксис arr.slice([start], [end] не включая [end])

const arrayTwo = arrOne.slice(1, 2); // копирует с индекса 1 + 2 шага, не включая второй элемент
console.log(arrayTwo);

const arrayThree = arrOne.slice(-2, -1); // копирует с предпоследней позиции до последней, не включая
console.log(arrayThree);

const arrayFour = arrOne.slice(); // копирует весь массив
console.log(arrayFour);

/// *Метод CONCAT* - создает новый массив, в который копирует данные из других массивов и дополнительные значения (в конце массива)
// Синтаксис arr.concat(arg1, arg2...)

const arrConcat = arrOne.concat('Денис');
console.log(arrConcat);

const arrSecond = ['Марго', 'Алексей', 'Андрей'];

const arrTwoConcat = arrOne.concat('Подвох', arrSecond, 'Денис');
console.log(arrTwoConcat);

/// *Метод FILTER* - ищет все элементы, удовлетворяющие определнному условию

let arrFive = [
    {name: 'Вася', age: 36},
    {name: 'Коля', age: 45},
    {name: 'Оля', age: 'Не скажу'}
];

let result = arrFive.filter(function(item){
    return item.age >= 45;
});
console.log(result);

/// *Метод SORT* - сортирует массив на месте, меняя в нем порядок элементов

console.log(arrTwoConcat.sort());

//* сортировка чисел
const arrNumbers = [8, 22, 1]; // по умолчанию элементы сортируются как строки, поэтому '8' > '22'
console.log(arrNumbers.sort());

// сортировка будет по числам если прописать функцию в алгоритм метода сортировки:

console.log(arrNumbers.sort((a, b) => a - b));

/// *Метод REVERSE* - меняет порядок элементов в массиве на обратный

console.log(arrayFour.reverse());