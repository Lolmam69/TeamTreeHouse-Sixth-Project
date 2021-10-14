const qwerty = document.getElementById('qwerty');
const phrases = ['fly me to the moon', 'one small step for man', 'never gonna give you up', 'somewhere over the rainbow', 'kill two birds with one stone'];
let phrase = document.getElementById('phrase');
let missed = 0;

const startGameButton = document.querySelector('a.btn__reset');
startGameButton.addEventListener('click', () => {
    startGameButton.parentNode.style.display = 'none';
});

function getRandomPhraseAsArray(arr) {
    randomPhrase = arr[Math.floor(Math.random() * arr.length)];
    randomPhraseCharacters = randomPhrase.split('');
    return randomPhraseCharacters;
}
