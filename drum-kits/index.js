// const kits = ['crash', 'kick', 'snare', 'tom'];
const kits = [
    {
        name: 'crash',
        key: 'c'
    },
    {
        name: 'kick',
        key: 'k'
    },
    {
        name: 'snare',
        key: 's'
    },
    {
        name: 'tom',
        key: 't'
    },
]

const containerEl = document.querySelector('.container');

kits.forEach((kit) => {
    const btnEl = document.createElement('button');
    
    btnEl.classList.add('btn');
    btnEl.innerText = kit.name;
    btnEl.style.backgroundImage = `url(./images/${kit.name}.png)`;
    containerEl.appendChild(btnEl);

    const audioEl = document.createElement('audio');
    audioEl.src = `./sound/${kit.name}.mp3`;
    containerEl.appendChild(audioEl);


    btnEl.addEventListener('click', () => {
        audioEl.currentTime = 0;
        audioEl.play();
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === kit.key) {
            audioEl.currentTime = 0;
            audioEl.play();
            btnEl.style.transform = 'scale(0.9)';

            setTimeout(() => {
                btnEl.style.transform = 'scale(1)';
            }, 100);
        }
    });
});