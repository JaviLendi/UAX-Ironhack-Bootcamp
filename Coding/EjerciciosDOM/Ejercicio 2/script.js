// Secret number: what the user will have to guess
const secretNumber = 55;

// Function
function checkGuess(e) {
    e.preventDefault();
    console.log('I am working')
}

// Iteration 1: Select the input
document.getElementById('guess-input').addEventListener('input', function() {
    userInput = this.value;
    console.log('Input:', userInput);
    localStorage.setItem('guess-input', userInput);
});


// Iteration 2: Select the button and add the event listener
document.getElementById('guess-btn').onclick = function() {
    sentInput = userInput;
    console.log('sent Input:', sentInput);
    localStorage.setItem('guess-input', sentInput);
    checkGuess();
    counter();
};

// Iteration 3: Add a try counter variable
let tryCounter = 0;
function counter() {
    tryCounter++;
    localStorage.setItem('tryCounter', tryCounter);
    //console.log('nº of tries: ', tryCounter)
}

// Iteration 4: Complete the function
function checkGuess() {
    if (sentInput < secretNumber) {
        alert(`Muy bajo, prueba un valor más alto. Número de intentos: ${tryCounter}`);
        console.log(`Muy alto, prueba un valor más alto. Número de intentos: ${tryCounter}`);
    } else if (sentInput > secretNumber) {
        alert(`Muy alto, prueba un valor más bajo. Número de intentos: ${tryCounter}`);
        console.log(`Muy bajo, prueba un valor más bajo. Número de intentos: ${tryCounter}`);
    } else {
        alert(`¡Ganaste! El número secreto era ${secretNumber}, Número de intentos: ${tryCounter}`);
        console.log(`¡Ganaste! El número secreto era ${secretNumber}, Número de intentos: ${tryCounter}`);
        // Reiniciar el juego si lo deseas
        resetGame();    
    }
}

function resetGame() {
    // Reiniciar el juego generando un nuevo número secreto y reiniciando el contador de intentos
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    console.log(secretNumber)
    tryCounter = 0;
}
