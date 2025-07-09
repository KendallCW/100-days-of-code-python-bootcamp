document.addEventListener("DOMContentLoaded", () => {
  const runButton = document.getElementById("runButton");
  const output = document.getElementById("output");

  runButton.addEventListener("click", () => {
    output.textContent = "Hi there and welcome to the Band Name Generator 🎸\n";
    
    setTimeout(() => {
      const city = prompt("Which city did you grow up in?");
      if (!city) return;

      output.textContent += `Which city did you grow up in?\n> ${city}\n`;

      setTimeout(() => {
        const pet = prompt("What is the name of your pet?");
        if (!pet) return;

        output.textContent += `What is the name of your pet?\n> ${pet}\n\n`;
        output.textContent += `Your band name could be: ${city} ${pet}`;
      }, 300);
    }, 300);
  });
});
