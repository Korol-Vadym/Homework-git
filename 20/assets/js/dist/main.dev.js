"use strict";

// правильні імена
var username = John;
var userName = David;
var lastname = Doe;
var lastName = Loran; // Не правильні імена
// let user-name;
// let 1name;
// let !username;
// let l@st-name;
// Спосіб коментування рядка

/*Спосіб
коментування 
декількох рядків*/

var camelCase; //Стиль написання змінних

/*Норма*/

function sayHello() {
  var userName = prompt('Напишіть ваше Ім`я');

  if (userName !== null) {
    alert("\u041F\u0440\u0438\u0432\u0456\u0442, ".concat(userName, "!"));
  } else {
    alert('Напишіть ваше Ім`я');
  }
}

function yourAge() {
  var currentYear = 2022;
  var birthdayYear = parseInt(prompt("напишіть ваш рік народження"));
  var age = currentYear - birthdayYear;
  alert("\u0412\u0430\u043C \u0437\u0430\u0440\u0430\u0440 ".concat(age, " \u0440\u043E\u043A\u0456\u0432"));
}

function perimetr() {
  var lenght = parseInt(prompt('Яка довжина сторони квадрату см?'));
  var result = lenght * 4;
  alert("\u041F\u0435\u0440\u0438\u043C\u0435\u0442\u0440 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u0443 ".concat(result, "\u0441\u043C"));
}
/*Максимум*/


function sircleSquare() {
  var pi = 3.14;
  var radius = parseInt(prompt('Введіть радіус кола в см'));
  var s = pi * Math.pow(radius, 2);
  alert("\u041F\u043B\u043E\u0449\u0430 \u0432\u0430\u0448\u043E\u0433\u043E \u043A\u0440\u0443\u0433\u0443 \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454 ".concat(s, "\u0441\u043C"));
}

function speedWay() {
  var distance = parseInt(prompt('Вкажіть відстань між містами в км'));
  var time = parseInt(prompt('Вкажіть вкажіть за який час плануєте дістатись до міста в год'));
  var speed = distance / time;
  alert("\u0412\u0430\u0448\u0430 \u0448\u0432\u0438\u0434\u043A\u0456\u0442\u044C \u043F\u043E\u0432\u0438\u043D\u0430 \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0438 ".concat(speed, "\u043A\u043C/\u0433\u043E\u0434"));
}

function exchange() {
  var crossCourse = 0.94;
  var dollar = parseInt(prompt('Вкажіть суму в $'));
  var euro = (dollar * crossCourse).toFixed(2);
  alert("\u0412\u0430\u0448 \u0434\u043E\u0431\u0443\u0442\u043E\u043A \u0441\u043A\u043B\u0430\u0434\u0430\u0454 ".concat(euro, "\u20AC"));
}