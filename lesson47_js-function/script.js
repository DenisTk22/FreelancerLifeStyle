
function showMessage() {
    console.log('Сообщение');
    
}

showMessage();
let showMessageAgian;
let agian;

// функциональные выражения
let showMessage2 = function () {
    
    console.log('Ну привет!');
}

if (2 > 1) {
    const showMessageAgian = function () {
        console.log('Ну привет! еще раз!');
    };
}

showMessage2();

agian = showMessageAgian;

console.log(agian);
// Однострочная стрелочная функция
let getMessage = (text, name) => text + ', ' + name + '!';

console.log(getMessage('Привет', 'Вася'));

// Многострочная стрелочная функция
let getMessage1 = (text, name) => {
    let message = text + ', ' + name + '!';
    return message;
}

console.log(getMessage1('Привет', 'Денис'));

setTimeout(getMessage1, 3000, 'Привет', 'Медвед!')