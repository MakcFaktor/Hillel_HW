function displayRandomImage() {
    const imagesFolder = 'img/';
    const imageContainer = document.getElementById('imageContainer');

    const randomImageNumber = Math.floor(Math.random() * 9) + 1;
    const imageElement = document.createElement('img');

    imageElement.src = `${imagesFolder}${randomImageNumber}.jpg`;
    imageElement.alt = `Зображення ${randomImageNumber}`;

    imageContainer.innerHTML = '';

    imageContainer.appendChild(imageElement);
}
