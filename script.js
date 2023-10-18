let table = document.getElementById('myTable');
let count = 1;

function addCellWithDelay(i, j) {
    setTimeout(function () {
        let row = table.rows[i];
        let cell = row.insertCell(j);
        cell.textContent = count;

        let randomColor = getRandomColor();
        cell.style.backgroundColor = randomColor;

        count++;
    }, (i * 10 + j) * 100);
}

for (let i = 0; i < 10; i++) {
    let row = table.insertRow(i);
    for (let j = 0; j < 10; j++) {
        addCellWithDelay(i, j);
    }
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
