const scene = document.getElementById("scene");
const form = document.getElementById("gameForm");
const input = document.getElementById("choiceInput");
const result = document.getElementById("result");

let step = 0; // Track which decision we’re on

// Updated scenes to include visible choices
const scenes = [
  `You step into a misty cave.\n
Two paths lie ahead—one lit faintly to the left, the other swallowed in darkness to the right.\n
👉 Options: 'left' or 'right'`,

  `A silent black lake stretches out before you.\n
A rickety dock creaks under your feet as mist rises from the water.\n
👉 Options: 'wait' or 'swim'`,

  `⚔️ The corridor narrows into a chamber shimmering with golden light.\n
Three doors stand before you:\n
🟦 Blue   🔥 Red   💛 Yellow  🚶 Walk deeper into the shimmer.\n
👉 Options: 'blue', 'red', 'yellow', or 'walk'`
];

// Display the first scene
scene.textContent = scenes[0];

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const choice = input.value.toLowerCase().trim();
  input.value = "";

  // First decision
  if (step === 0) {
    if (choice === "left") {
      scene.textContent = scenes[1];
      result.textContent = "";
      step++;
    } else if (choice === "right") {
      result.textContent = "🕳️ You plummet into a hidden pit. Game Over.";
      form.style.display = "none";
    } else {
      result.textContent = "⚠️ Choose either 'left' or 'right'.";
    }
    return;
  }

  // Second decision
  if (step === 1) {
    if (choice === "wait") {
      scene.textContent = scenes[2];
      result.textContent = "";
      step++;
    } else if (choice === "swim") {
      result.textContent = "🐟 Something grabs your leg. Game Over.";
      form.style.display = "none";
    } else {
      result.textContent = "⚠️ Choose either 'wait' or 'swim'.";
    }
    return;
  }

  // Final decision
  if (step === 2) {
    if (choice === "yellow") {
      result.textContent = "🏆 You found the treasure! You Win!";
    } else if (["blue", "red", "walk"].includes(choice)) {
      result.textContent = "💀 Game Over.";
    } else {
      result.textContent = "⚠️ Choose 'blue', 'red', 'yellow', or 'walk'.";
      return;
    }
    form.style.display = "none";
  }
});
