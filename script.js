document.addEventListener("DOMContentLoaded", function () {
    const choices = ["rock", "paper", "scissors"];

    const buttons = document.querySelectorAll("button");
    const result = document.querySelector(".result");

    buttons.forEach((button) => {
        button.addEventListener("click", playGame);
    });

    function playGame(e) {
        const playerChoice = e.target.id;
        const computerChoice = choices[Math.floor(Math.random() * 3)];

        const winner = getWinner(playerChoice, computerChoice);
        displayResult(playerChoice, computerChoice, winner);
    }

    function getWinner(player, computer) {
        if (player === computer) {
            return "It's a tie!";
        } else if (
            (player === "rock" && computer === "scissors") ||
            (player === "paper" && computer === "rock") ||
            (player === "scissors" && computer === "paper")
        ) {
            return "You win!";
        } else {
            return "Computer wins!";
        }
    }

    function displayResult(player, computer, winner) {
        result.textContent = `Player chose ${player}, Computer chose ${computer}. ${winner}`;
    }
});
