function SuperMath(X, Y, znak) {
    this.X = X;
    this.Y = Y;
    this.znak = znak;
}

SuperMath.prototype.performOperation = function () {
    switch (this.znak) {
        case '+':
            return this.X + this.Y;
        case '-':
            return this.X - this.Y;
        case '/':
            return this.X / this.Y;
        case '*':
            return this.X * this.Y;
        case '%':
            return this.X % this.Y;
        default:
            return 'Недійсний оператор';
    }
};

SuperMath.prototype.check = function (obj) {
    const validOperators = ['+', '-', '/', '*', '%'];

    if (validOperators.includes(obj.znak)) {
        const confirmMessage = `Ви хочете зробити операцію ${obj.znak} з ${obj.X} і ${obj.Y}? (так/ні)`;
        const userConfirm = confirm(confirmMessage);

        if (userConfirm) {
            return this.performOperation();
        } else {
            const userInput = this.input();
            return userInput.performOperation();
        }
    } else {
        return 'Недійсний оператор. Укажіть дійсний оператор.';
    }
};

SuperMath.prototype.input = function () {
    const newX = parseFloat(prompt('Введіть нове значення для X:'));
    const newY = parseFloat(prompt('Введіть нове значення для Y:'));
    const newZnak = prompt('Введіть дійсний оператор (+, -, /, *, %):');

    return new SuperMath(newX, newY, newZnak);
};

// Example usage
const obj = new SuperMath(12, 3, '/');
const result = obj.check(obj);
console.log('Результат:', result);
