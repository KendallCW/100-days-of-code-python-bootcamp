const scene = document.getElementById("scene");
const form = document.getElementById("gameForm");
const input = document.getElementById("choiceInput");
const result = document.getElementById("result");

let step = 0; // Track which decision we’re on

// Scene descriptions – show once per step
const scenes = [
  "You step into a misty cave.\nTwo paths lie ahead—one lit faintly to the left, the other swallowed in darkness to the right.",
  "A silent black lake stretches out before you.\nA rickety dock creaks under your feet.",
  "⚔️ The corridor narrows and opens into a chamber shimmering with golden light.\nThree doors appear: one blue, one red, one yellow.\nOr you can ignore them and walk deeper into the shimmer."
];

// Initialize first scene
scene.textContent = scenes[0];

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const choice = input.value.toLowerCase().trim();
  input.value = ""; // Clear input

  // Step 1: Left or Right
  if (step === 0) {
    if (choice === "left") {
      scene.textContent = scenes[1];
      result.textContent = "";
      step++;
    } else if (choice === "right") {
      result.textContent = "🕳️ You plummet into a hidden pit. Game Over.";
      form.style.display = "none";
    } else {
      result.textContent = "⚠️ Choose 'left' or 'right'.";
    }
    return;
  }

  // Step 2: Wait or Swim
  if (step === 1) {
    if (choice === "wait") {
      scene.textContent = scenes[2];
      result.textContent = "";
      step++;
    } else if (choice === "swim") {
      result.textContent = "🐟 Something grabs your leg. Game Over.";
      form.style.display = "none";
    } else {
      result.textContent = "⚠️ Choose 'wait' or 'swim'.";
    }
    return;
  }

  // Step 3: Door selection
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
