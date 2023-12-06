const input = require('sync-input');

// USD exchange rates
let exchangeRates = {
    USD: 1.0,
    JPY: 113.5,
    EUR: 0.89,
    RUB: 74.36,
    GBP: 0.75
}

console.log("Welcome to Currency Converter!");
for (let rate in exchangeRates) {
    console.log(`1 USD equals ${exchangeRates[rate]} ${rate}`)
}

while(true) {
    console.log('What do you want to do?');
    console.log('1-Convert currencies 2-Exit program');
    let choice = Number(input());
    if (isNaN(choice) || choice < 1 || choice > 2) {
        console.log('Unknown input');
        continue;
    }
    if (choice === 2) {
        break;
    }

    console.log('What do you want to convert?');
    let from = input('From: ').toUpperCase();
    if (exchangeRates[from] === undefined) {
        console.log('Unknown currency');
    } else {
        let to = input('To: ').toUpperCase();
        if (exchangeRates[to] === undefined || exchangeRates[from] === undefined) {
            console.log('Unknown currency');
        } else {
            let amount = Number(input('Amount: '));
            if (isNaN(amount)) {
                console.log('The amount has to be a number');
            } else if (amount < 1) {
                console.log('The amount cannot be less than 1');
            } else {
                let result = (amount / exchangeRates[from]) * exchangeRates[to];
                console.log(`Result: ${amount} ${from} equals ${result.toFixed(4)} ${to}`);
            }
        }
    }
}

console.log('Have a nice day!');