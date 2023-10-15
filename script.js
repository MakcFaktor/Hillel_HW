const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');
const output = document.getElementById('output');

let previousValues = '';

function checkInputs() {
    const currentValues = `${input1.value}, ${input2.value}, ${input3.value}`;

    if (currentValues !== previousValues) {
        output.value = currentValues;
        previousValues = currentValues;
    }
}

const interval = setInterval(checkInputs, 2000);
