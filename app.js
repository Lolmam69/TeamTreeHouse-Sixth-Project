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

function addPhraseToDisplay(arr) {
    const phraseDisplay = phrase.firstElementChild;
    for (let i = 0; i < arr.length; i++) {
        displayItem = document.createElement('li');
        displayItem.textContent = arr[i];
        if (arr[i] === ' ') {
            phraseDisplay.appendChild(displayItem);
        } else {
            displayItem.className = 'letter';
            phraseDisplay.appendChild(displayItem);
        }
    }
}

function checkLetter(buttonPressed) {
    const lettersInPhrase = document.getElementsByClassName('letter');
    let matchingLetter = '';
    let matchingLetters = 0;
    for (let i = 0; i < lettersInPhrase.length; i++) {
        const letter = lettersInPhrase[i];
        if (buttonPressed === letter.textContent) {
            letter.className = 'show';
            matchingLetter = letter.textContent;
            matchingLetters++;
        }
    }
    if (matchingLetters > 0) {
        return matchingLetter;
    } else {
        return null;
    }
}

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);
