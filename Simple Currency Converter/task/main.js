// USD exchange rates
let exchangeRates = {
    USD: 1.0,
    JPY: 113.5,
    EUR: 0.89,
    RUB: 74.36,
    GBP: 0.75
}

console.log("Welcome to Currency Converter!");
for (rate in exchangeRates) {
    console.log(`1 USD equals ${exchangeRates[rate]} ${rate}`)
}