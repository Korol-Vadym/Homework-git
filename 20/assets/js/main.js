
// правильні імена
const username = John; 
const userName = David;
const lastname = Doe;
const lastName = Loran;


// Не правильні імена
// let user-name;
// let 1name;
// let !username;
// let l@st-name;


// Спосіб коментування рядка

/*Спосіб
коментування 
декількох рядків*/ 


let camelCase; //Стиль написання змінних




/*Норма*/



function sayHello() {
    const userName = prompt('Напишіть ваше Ім`я');
    if (userName !== null) {
         alert(`Привіт, ${userName}!`);
    } else {
        alert ('Напишіть ваше Ім`я');
    }
}

function yourAge() {
    const currentYear = 2022;
    const birthdayYear = parseInt(prompt("напишіть ваш рік народження"));
    const age = currentYear - birthdayYear;
    alert(`Вам зарар ${age} років`)
}

function perimetr() {
    const lenght = parseInt(prompt('Яка довжина сторони квадрату см?'));
    const result = lenght * 4;
    alert(`Периметр квадрату ${result}см`)
}


/*Максимум*/

function sircleSquare() {
    const pi = 3.14;
    const radius = parseInt(prompt('Введіть радіус кола в см'));
    const s = pi * radius**2;
    alert(`Площа вашого кругу дорівнює ${s}см`)
}

function speedWay() {
    const distance = parseInt(prompt('Вкажіть відстань між містами в км'));
    const time = parseInt(prompt('Вкажіть вкажіть за який час плануєте дістатись до міста в год'));
    const speed = distance / time;
    alert(`Ваша швидкіть повина становити ${speed}км/год`);
}

function exchange() {
    const crossCourse = 0.94;
    const dollar = parseInt(prompt('Вкажіть суму в $'))
    const euro = (dollar * crossCourse).toFixed(2);
    alert(`Ваш добуток складає ${euro}€`)
}

































































