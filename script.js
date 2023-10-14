class Hamburger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
    }

    static SIZE_SMALL = 'small';
    static SIZE_LARGE = 'large';
    static STUFFING_CHEESE = 'cheese';
    static STUFFING_SALAD = 'salad';
    static STUFFING_POTATO = 'potato';
    static TOPPING_MAYO = 'mayo';
    static TOPPING_SAUCE = 'sauce';

    static SIZE_PROPERTIES = {
        small: { price: 50, calories: 20 },
        large: { price: 100, calories: 40 }
    };

    static STUFFING_PROPERTIES = {
        cheese: { price: 10, calories: 20 },
        salad: { price: 20, calories: 5 },
        potato: { price: 15, calories: 10 }
    };

    static TOPPING_PROPERTIES = {
        mayo: { price: 20, calories: 5 },
        sauce: { price: 15, calories: 0 }
    };

    addTopping(topping) {
        this.toppings.push(topping);
    }

    calculatePrice() {
        let price = Hamburger.SIZE_PROPERTIES[this.size].price;
        price += Hamburger.STUFFING_PROPERTIES[this.stuffing].price;

        for (const topping of this.toppings) {
            price += Hamburger.TOPPING_PROPERTIES[topping].price;
        }

        return price;
    }

    calculateCalories() {
        let calories = Hamburger.SIZE_PROPERTIES[this.size].calories;
        calories += Hamburger.STUFFING_PROPERTIES[this.stuffing].calories;

        for (const topping of this.toppings) {
            calories += Hamburger.TOPPING_PROPERTIES[topping].calories;
        }

        return calories;
    }
}

var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
console.log("Калорії: " + hamburger.calculateCalories());
console.log("Ціна: " + hamburger.calculatePrice());

hamburger.addTopping(Hamburger.TOPPING_MAYO);
console.log("Ціна з майонезом: " + hamburger.calculatePrice());

hamburger.addTopping(Hamburger.TOPPING_SAUCE);
console.log("Ціна з майонезом і соусом: " + hamburger.calculatePrice());