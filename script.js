class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Car {
    constructor(brand, model, year, licensePlate) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.licensePlate = licensePlate;
        this.owner = null;
    }

    assignOwner(owner) {
        const currentYear = new Date().getFullYear();
        const ownerAge = currentYear - owner.age;

        if (ownerAge >= 18) {
            this.owner = owner;
            console.log(`Власник: ${owner.name}`);
        } else {
            console.log('Власник повинен бути не менше 18 років.');
        }
    }

    displayInfo() {
        console.log(`Aвтомобіль: ${this.brand} ${this.model}`);
        console.log(`Рік: ${this.year}, Номерний знак: ${this.licensePlate}`);
        if (this.owner) {
            console.log('Інформація про власника:');
            console.log(`Ім'я: ${this.owner.name}, Вік: ${this.owner.age}`);
        } else {
            console.log('Власник не призначений.');
        }
    }
}


const person1 = new Person('Вася', 25);
const person2 = new Person('Петя', 16);

const car1 = new Car('Toyota', 'Corolla', 2020, 'AB123CD');
car1.assignOwner(person1);

const car2 = new Car('Honda', 'Civic', 2018, 'XY456Z');
car2.assignOwner(person2);

car1.displayInfo();
console.log('------------------------');
car2.displayInfo();
