"use strict";

function trueAnswer() {
  var a = 0.1;
  var b = 0.2;
  var c = (a + b).toFixed(1);
  alert("\u041F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0432\u0438\u0440\u0430\u0437 0.1+0.2= ".concat(c));
}

function trueAnswer2() {
  var a = parseInt('1');
  var b = 2;
  var c = a + b;
  alert("\u041F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0432\u0438\u0440\u0430\u0437 \u0440\u044F\u0434\u043A\u0430 '1' \u0456 \u0446\u0438\u0444\u0440\u0438 2 = ".concat(c, " "));
}

function valueFiles() {
  var valueFlash = parseInt(prompt('Який обсяг флешки гб?'));

  if (!isNaN(valueFlash)) {
    var gigabyte = valueFlash * 1024;
    var valueFile = 820;
    var amountFiles = Math.floor(gigabyte / valueFile);
    alert("\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0444\u0430\u0439\u043B\u0456\u0432 \u0441\u043A\u043B\u0430\u0434\u0430\u0454 ".concat(amountFiles));
  } else {
    alert('Ведіть обсяг у цифрах');
  }
}

function Chocolate() {
  var money = parseInt(prompt('Яка у вас сума грошей грн?'));
  var price = parseInt(prompt('Яка вартість шоколадки?'));

  if (!isNaN(money) && !isNaN(price)) {
    var amount = Math.floor(money / price);
    var change = (money - price * amount).toFixed(2);
    alert("\u0412\u0438 \u043E\u0442\u0440\u0438\u043C\u0430\u0454\u0442\u0435 ".concat(amount, " \u0448\u043E\u043A\u043E\u043B\u0430\u0434\u043E\u043A \u0442\u0430 \u0440\u0435\u0448\u0442\u0443 ").concat(change, "\u0433\u0440\u043D"));
  } else {
    alert('Ведіть у цифрах');
  }
}

function magic() {
  var firstNumber = parseInt(prompt('Ведіть тризначне число'));

  if (!isNaN(firstNumber)) {
    var firstFigure = Math.trunc(firstNumber / 100);
    var secondFigure = Math.trunc(firstNumber % 100 / 10);
    var thirdFigure = firstNumber % 10;
    var secondNumber = thirdFigure * 100 + secondFigure * 10 + firstFigure;
    alert("\u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E ".concat(secondNumber));
  } else {
    alert('Ведіть число');
  }
}

function bank() {
  var money = parseInt(prompt('Ведіть суму вкладу на 2 місяці'));

  if (!isNaN(money)) {
    var proc = money * 5 / 100;
    var sum = (proc / 365 * 60).toFixed(2);
    alert("\u0421\u0443\u043C\u0430 \u0432\u0430\u0448\u0438\u0445 \u0432\u0456\u0434\u0441\u043E\u0442\u043A\u0456\u0432 ".concat(sum));
  } else {
    alert('Ведіть суму цифрами');
  }
}