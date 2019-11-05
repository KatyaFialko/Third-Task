let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Введите обязательную статью расходов в этом месяце', '');
        b = prompt('Во сколько обойдется?', '');

        if ( (typeof (a)) === 'string' && (typeof (a)) !== null && (typeof (b)) !== null && a !== "" && b !== "" && a.length < 50 ) {
            console.log('done');
            appData.expenses[a] = b;
        } else {
            console.log ("bad result");
            i = i - 1;
        }
    }
}
chooseExpenses();

function  detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();

    alert('Ежедневный бюджет: ' + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        alert('Минимальный уровень достатка');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        alert('Средний уровень достатка');
    } else if (appData.moneyPerDay > 2000) {
        alert('Высокий уровень достатка');
    } else {
        alert("Произошла ошибка");
    }
}
detectLevel();



function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('Какова сумма накоплений?'),
            percent = +prompt('Какой процент?');

        appData.monthIncome = save/1001/12*percent;
        alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
    }
}
checkSavings();

function chooseOptExpenses() {

    for (let i = 0; i < 3; i++) {
        let a1 = prompt('Статья необязательных расходов?');
        appData.optionalExpenses[i] = a1;
        console.log(appData.optionalExpenses);
    }
}
chooseOptExpenses();
