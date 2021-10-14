const qwerty = document.getElementById('qwerty');
let phrase = document.getElementById('phrase');
let missed = 0;

const startGameButton = document.querySelector('a.btn__reset');
startGameButton.addEventListener('click', () => {
    startGameButton.parentNode.style.display = 'none';
});
