document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bandForm");
  const result = document.getElementById("result");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const city = document.getElementById("city").value.trim();
    const pet = document.getElementById("pet").value.trim();

    if (city && pet) {
      result.textContent = `🎤 Your band name could be: ${city} ${pet}`;
    } else {
      result.textContent = "Please enter both values!";
    }
  });
});
