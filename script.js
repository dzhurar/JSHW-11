// 1
const bankAccount = {
    ownerName: 'John',
    accountNumber: '01',
    balance: 2000,
    deposit (amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`До рахунку додано ${amount} грн. Поточний баланс: ${this.balance}`)
        } else {console.log(`Сума поповнення має бути більша за 0 грн.`)}
    },
    withdraw (amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`З рахунку знято ${amount} грн. Поточний баланс: ${this.balance}`)
        } else {
            console.log("Недостатньо коштів на рахунку, або некоректна сума для зняття")
        }
    }
};
bankAccount.deposit(400);
bankAccount.withdraw(400);
bankAccount.withdraw(2500);
bankAccount.deposit(0);


// 2
const weather = {
    // temperature: 24,
    temperature: -4,
    humidity: '50%',
    windSpeed: '24MpH',
    temperatureCheck (askMe) {
        if (this.temperature < 0) {
            console.log("тумпература нижче нуля")
        } else {console.log("тумпература вище нуля")};
    }
}
weather.temperatureCheck('askingYou');


// 3
const user = {
    name: 'kifont',
    email: 'Grigoryi74sm@gmail.com',
    password: '773412qre_0984',
    login (userName, password) {
        if (userName === this.name && password === this.password) {
            console.log(`Раді вітати вас ${this.name}`)
        } else {
            console.log(`Елкетронна почта або пароль введені неправильно.`)
        }
    }
}
user.login('kifont', '773412qre_0984');


// 4
const movie = {
    title: 'Pirates of the Caribbean',
    director: 'Gore Verbinski',
    year: 2003,
    rating: 8.3,
    ratingGood (checkMe) {
        if (this.rating >= 8) {
            return true;
        } else {
            return false;
        }
    }
};

if (movie.ratingGood('check') === true) {
    console.log(`Це хороший фільм`);
} else {
    console.log(`Це нормальний фільм`);
}