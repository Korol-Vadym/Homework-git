function trueAnswer() {
    const a = 0.1;
    const b = 0.2;
    const c = (a + b).toFixed(1);
    alert(`Правильний вираз 0.1+0.2= ${c}`)
}

function trueAnswer2() {
    const a = parseInt('1');
    const b = 2;
    const c = a + b;
    alert(`Правильний вираз рядка '1' і цифри 2 = ${c} `)
}


function valueFiles() {
    const valueFlash = parseInt(prompt('Який обсяг флешки гб?'))
    if(!isNaN(valueFlash)) {
        const gigabyte = valueFlash * 1024;
        const valueFile = 820;
        const amountFiles = Math.floor(gigabyte / valueFile);
        alert(`Кількість файлів складає ${amountFiles}`);
    } else {
        alert('Ведіть обсяг у цифрах');
    }
}

function Chocolate(){
    const money = parseInt(prompt('Яка у вас сума грошей грн?'));
    const price = parseInt(prompt('Яка вартість шоколадки?'));
    if(!isNaN(money) && !isNaN(price)) {
        const amount = Math.floor(money / price);
        const change = (money - price * amount).toFixed(2);
        alert(`Ви отримаєте ${amount} шоколадок та решту ${change}грн`);
    } else {
        alert('Ведіть у цифрах');
    }
    
}


function magic() {
    const firstNumber = parseInt(prompt('Ведіть тризначне число'));
    if (!isNaN(firstNumber)) {
        const firstFigure = Math.trunc(firstNumber / 100);
        const secondFigure = Math.trunc((firstNumber % 100) / 10);
        const thirdFigure = firstNumber % 10;
        const secondNumber = thirdFigure * 100 + secondFigure * 10 + firstFigure;
        alert(`Ваше число ${secondNumber}`);
    } else {
        alert('Ведіть число');
    }
  
}

function bank() {
    const money = parseInt(prompt('Ведіть суму вкладу на 2 місяці'));
    if(!isNaN(money)) {
        const proc = (money * 5) / 100;
        const sum = (proc / 365 * 60).toFixed(2);
        alert(`Сума ваших відсотків ${sum}`)
    } else {
        alert('Ведіть суму цифрами')
    }

    

}














