const rangeInput = document.getElementById('rangeInput');
const numberInput = document.getElementById('numberInput');
const greenBlock = document.getElementById('greenBlock');
const redBlock = document.getElementById('redBlock');

function updateDiagram(value) {
    const commissionRates = {
        20: 0.002,
        50: 0.004,
        75: 0.006,
        100: 0.008
    };

    let commission = 0;
    let commissionHeight = 0;

    for (const rate in commissionRates) {
        if (value <= parseFloat(rate)) {
            commission = commissionRates[rate];
            commissionHeight = value * commission * 10;
            break;
        }
    }

    const totalAmount = parseFloat(value) + parseFloat(value) * commission;
    redBlock.style.height = ` ${commissionHeight}px`;
    greenBlock.style.height = `${value}px`;

    console.log(`Комісія: ${commission * 100}%, Загальна кількість: ${totalAmount}`);
}

rangeInput.addEventListener('input', (event) => {
    const value = event.target.value;
    numberInput.value = value;
    updateDiagram(value);
});

numberInput.addEventListener('input', (event) => {
    const value = event.target.value;
    rangeInput.value = value;
    updateDiagram(value);
});