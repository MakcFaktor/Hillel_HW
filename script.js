const rangeInput = document.getElementById('rangeInput');
const numberInput = document.getElementById('numberInput');
const greenBlock = document.getElementById('greenBlock');
const redBlock = document.getElementById('redBlock');

function calculateCommission(value) {
    const commissionRates = {
        20: 0.02,
        50: 0.04,
        75: 0.06,
        100: 0.08
    };

    let commission = 0;
    for (const rate in commissionRates) {
        if (value <= parseFloat(rate)) {
            commission = commissionRates[rate];
            break;
        }
    }

    return commission;
}

function updateDiagram(value) {
    const commission = calculateCommission(value);
    const commissionHeight = value * commission;

    const totalAmount = parseFloat(value) + parseFloat(value) * commission;
    redBlock.style.height = `${commissionHeight}px`;
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
});


