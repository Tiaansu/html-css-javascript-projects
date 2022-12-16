const containerEl = document.querySelector('.container');

function generateColors() {
    for (let i = 0; i < 30; i ++) {
        const colorContainerEl = document.createElement('div');
        const colorCode = randomColor();
        colorContainerEl.classList.add('color-container');
        colorContainerEl.id = colorCode;
        colorContainerEl.style.backgroundColor = `#${colorCode}`;
        colorContainerEl.innerText = `#${colorCode}`;
        containerEl.appendChild(colorContainerEl);
    }
}
generateColors();

const colorContainerEl = document.querySelectorAll('.color-container');
colorContainerEl.forEach((color) => {
    color.addEventListener('click', (e) => {
        color.innerText = 'copied';
        navigator.clipboard.writeText(`#${e.target.id}`);
        setTimeout(() => {
            color.innerText = `#${e.target.id}`;
        }, 1000);
    });
});

function randomColor() {
    const chars = "0123456789ABCDEF";
    const colorCodeLength = 6;
    let colorCode = "";

    for (let i = 0; i < colorCodeLength; i ++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(randomNum, randomNum + 1);
    }
    return colorCode;
}