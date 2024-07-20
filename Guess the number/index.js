document.addEventListener('DOMContentLoaded', () => {
    let randomnumber = parseInt(Math.random() * 100 + 1);

    const userinput = document.querySelector('#guessField');
    const submit = document.querySelector('#subt');
    const guessesslot = document.querySelector('.guesses');
    const remaining = document.querySelector('.lastResult');
    const lowOrHi = document.querySelector('.lowOrHi');
    const startOver = document.querySelector('.resultParas');

    const p = document.createElement('p');

    let prevGuess = [];
    let numGuess = 1;

    let playgame = true;

    if (playgame) {
        submit.addEventListener('click', (e) => {
            e.preventDefault();
            const guess = parseInt(userinput.value);
            ValidateGuess(guess);
        });
    }

    function ValidateGuess(guess) {
        if (isNaN(guess)) {
            alert('Please enter a valid number');
        } else if (guess > 100) {
            alert('Please enter a number smaller than 100');
        } else if (guess < 1) {
            alert('Please enter a number greater than 1');
        } else {
            prevGuess.push(guess);
            DisplayGuess(guess);
            CheckGuess(guess);
        }
    }

    function CheckGuess(guess) {
        if (guess === randomnumber) {
            DisplayMessage('Your guess is correct!');
            endGame();
        } else if (guess > randomnumber) {
            DisplayMessage('Your guess is too high!');
        } else if (guess < randomnumber) {
            DisplayMessage('Your guess is too low!');
        }

        if (numGuess >= 11) {
            DisplayMessage(`Game over. The random number was ${randomnumber}`);
            endGame();
        }
    }

    function DisplayGuess(guess) {              // its a cleanup function
        userinput.value = '';
        guessesslot.innerHTML += `${guess}, `;
        numGuess++;
        remaining.innerHTML = `${10 - numGuess}`;
    }

    function DisplayMessage(message) {              
        lowOrHi.innerHTML = `<h2>${message}</h2>`;
    }

    function endGame() {
        userinput.value = '';
        userinput.setAttribute('disabled', '');
        p.classList.add('button');
        p.innerHTML = '<h2 id="newGame">Start new game</h2>';
        startOver.appendChild(p);
        playgame = false;
        newGame();
    }

    function newGame() {
        const newGameButton = document.querySelector('#newGame');
        newGameButton.addEventListener("click", (e) => {
            randomnumber = parseInt(Math.random() * 100 + 1);
            prevGuess = [];
            numGuess = 1;
            guessesslot.innerHTML = '';
            remaining.innerHTML = `${10 - numGuess}`;
            userinput.removeAttribute('disabled');
            startOver.removeChild(p);
            playgame = true;
        });
    }
});
