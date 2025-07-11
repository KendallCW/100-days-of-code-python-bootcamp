document.getElementById("cipherForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const direction = document.getElementById("direction").value;
  const text = document.getElementById("text").value.toLowerCase();
  let shift = parseInt(document.getElementById("shift").value);

  if (direction === "decode") {
    shift *= -1;
  }

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let output = "";

  for (let char of text) {
    if (!alphabet.includes(char)) {
      output += char;
    } else {
      let position = (alphabet.indexOf(char) + shift) % alphabet.length;
      if (position < 0) position += alphabet.length;
      output += alphabet[position];
    }
  }

  document.getElementById("output").textContent = `Result (${direction}d): ${output}`;
});
