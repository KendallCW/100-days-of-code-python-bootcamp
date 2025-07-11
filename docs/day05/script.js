const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const numbers = "0123456789".split("");
const symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+'];

document.getElementById("passwordForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nrLetters = parseInt(document.getElementById("letters").value, 10);
  const nrSymbols = parseInt(document.getElementById("symbols").value, 10);
  const nrNumbers = parseInt(document.getElementById("numbers").value, 10);
  const mode = document.querySelector("input[name='mode']:checked").value;

  const password = generatePassword(nrLetters, nrSymbols, nrNumbers, mode);
  document.getElementById("result").textContent = `🧪 Generated Password: ${password}`;
});

function generatePassword(nrLetters, nrSymbols, nrNumbers, mode) {
  let passwordArray = [];

  for (let i = 0; i < nrLetters; i++) {
    passwordArray.push(randomChoice(letters));
  }
  for (let i = 0; i < nrSymbols; i++) {
    passwordArray.push(randomChoice(symbols));
  }
  for (let i = 0; i < nrNumbers; i++) {
    passwordArray.push(randomChoice(numbers));
  }

  if (mode === "hard") {
    shuffleArray(passwordArray);
  }

  return passwordArray.join("");
}

function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
