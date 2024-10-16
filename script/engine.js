//VOLUME
const volumeControl = document.getElementById('rangeInput');

volumeControl.addEventListener('input', function() {
    const value = (volumeControl.value - volumeControl.min) / (volumeControl.max - volumeControl.min) * 100;
    volumeControl.style.background = `linear-gradient(to right, var(--azul) ${value}%, white ${value}%)`;
});

// TOCAR SOM
function playSound(key) {
    let currentAudio = new Audio(`./tunes/${key}.wav`); 
    currentAudio.volume = volumeControl.value / 100; 
    currentAudio.play(); 
}

const button = document.getElementById('button');
const keySpans = document.querySelectorAll('.key span'); 

button.addEventListener('change', () => {
    keySpans.forEach(span => {
        span.style.display = button.checked ? 'inline' : 'none';
    });
});

// TECLAS E MOUSE
const keys = document.querySelectorAll('.key');

keys.forEach(key => {
    key.addEventListener('mousedown', () => {
        playSound(key.dataset.key);
        key.classList.add('pressed');
    });
    key.addEventListener('mouseup', () => {
        key.classList.remove('pressed');
    });
});

window.addEventListener('keydown', (event) => {
    const key = document.querySelector(`.key[data-key="${event.key.toLowerCase()}"]`); // Mapeia para minúsculas
    if (key) {
        playSound(key.dataset.key);
        key.classList.add('pressed');
    }
});

window.addEventListener('keyup', (event) => {
    const key = document.querySelector(`.key[data-key="${event.key.toLowerCase()}"]`); // Mapeia para minúsculas
    if (key) {
        key.classList.remove('pressed');
    }
});










