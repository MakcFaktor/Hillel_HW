class Person {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}

class Apartment {
    constructor() {
        this.residents = [];
    }

    addResident(person) {
        this.residents.push(person);
    }
}

class House {
    constructor(maxApartments) {
        this.apartments = [];
        this.maxApartments = maxApartments;
    }

    addApartment(apartment) {
        if (this.apartments.length < this.maxApartments) {
            this.apartments.push(apartment);
        } else {
            console.log("Неможливо додати більше квартир. Досягнуто максимального ліміту.");
        }
    }
}

const person1 = new Person("Вітя", "Чоловік");
const person2 = new Person("Света", "Жінка");
const person3 = new Person("Петя", "Чоловік");

const apartment1 = new Apartment();
const apartment2 = new Apartment();
const apartment3 = new Apartment();

apartment1.addResident(person1);
apartment2.addResident(person2);
apartment2.addResident(person3);
apartment3.addResident(person3);
apartment3.addResident(person2);
apartment3.addResident(person1);

const house = new House(3);

house.addApartment(apartment1);
house.addApartment(apartment2);
house.addApartment(apartment3);

for (let i = 0; i < house.apartments.length; i++) {
    console.log(`Квартира ${i + 1}, мешканці:`);
    for (const resident of house.apartments[i].residents) {
        console.log(`- ${resident.name}, ${resident.gender}`);
    }
    console.log("----------------------------------");
}