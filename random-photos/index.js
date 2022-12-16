const imageContainerEl = document.querySelector('.image-container');

const btnEl = document.querySelector('.btn');

window.addEventListener('load', () => {
    const imageCount = 8;
    addNewImages(imageCount);
});

btnEl.addEventListener('click', () => {
    const imageCount = 12;
    addNewImages(imageCount);
});

function addNewImages(count) {
    for (let i = 0; i < count; i ++) {
        const newImgEl = document.createElement('img');
        newImgEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;
        imageContainerEl.appendChild(newImgEl);
    }
}