const asciiArt = {
  rock: `    ROCK
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)`,
  paper: `    PAPER
    _______
---'   ____)____
          ______)
          _______)
         _______)
---.__________)`,
  scissors: `    SCISSORS
    _______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)`
};

const options = ["rock", "paper", "scissors"];

const form = document.getElementById("gameForm");
const input = document.getElementById("choiceInput");
const display = document.getElementById("displayArea");
const playAgainForm = document.getElementById("playAgainForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const userChoice = input.value.toLowerCase().trim();
  input.value = "";

  if (!options.includes(userChoice)) {
    display.textContent = "⚠️ Invalid choice. Please type rock, paper, or scissors.";
    playAgainForm.style.display = "none";
    return;
  }

  const computerChoice = options[Math.floor(Math.random() * options.length)];

  display.innerHTML =
    `<p><strong>You chose:</strong></p><pre>${asciiArt[userChoice]}</pre>` +
    `<p><strong>Computer chose:</strong></p><pre>${asciiArt[computerChoice]}</pre>` +
    `<p><strong>Result:</strong> ${getWinner(userChoice, computerChoice)}</p>`;

  playAgainForm.style.display = "block";
});

playAgainForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const choice = e.submitter.value;
  if (choice === "no") {
    display.innerHTML += `<p>🎉 Thanks for playing! Refresh the page to start over.</p>`;
    playAgainForm.style.display = "none";
  } else {
    display.innerHTML = "";
    playAgainForm.style.display = "none";
  }
});

function getWinner(user, computer) {
  if (user === computer) return "🤝 It's a tie!";
  if (
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")
  ) {
    return "🏆 You win!";
  }
  return "💻 I win! Better luck next time.";
}
