const joc = document.querySelector(`.joc-container`);
const playerOneText = document.querySelector(`#player-one`);
const playerTwoText = document.querySelector(`#player-two`);
const rezultatText = document.querySelector(`#rezultat`);
const selectVariant = document.querySelector(`#operator`);
const jocForm = document.querySelector(`.joc-form`)

let playerOne;
let playerTwo;
let rezultat;






jocForm.addEventListener(`submit`, (event) => {

    event.preventDefault();

    playerOne = selectVariant.value
    playerTwoTurn();
    playerOneText.textContent = `Player One: ${playerOne}`;
    playerTwoText.textContent = `Player Two: ${playerTwo}`
    rezultatText.textContent = castigator();
});


const playerTwoTurn = () => {
    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum) {
        case 1:
            playerTwo = `Foarfeca`;
            break;
        case 2:
            playerTwo = `Piatra`;
            break;
        case 3:
            playerTwo = `Hartie`;
            break;
    }
};

const castigator = () => {
    
    if (playerOne == playerTwo) {
        return `Egalitate !`;
    }
    else if ( playerTwo == `Piatra`) {
        return ( playerOne == `Hartie`) ? `Ai Castigat !` : `Ai Pierdut !`
    }
    else if ( playerTwo == `Hartie`) {
        return ( playerOne == `Foarfeca`) ? `Ai Castigat !` : `Ai Pierdut !`
    }
    else if ( playerTwo == `Foarfeca`) {
        return ( playerOne == `Piatra`) ? `Ai Castigat !` : `Ai Pierdut !`
    }
};
