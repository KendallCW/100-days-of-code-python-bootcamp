document.getElementById("composerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = formatName(document.getElementById("name").value);
  const verb = document.getElementById("verb").value.trim();
  const object = document.getElementById("object").value.trim();

  const output = document.getElementById("output");
  output.innerHTML = `
    <p>🔧 ${sentenceLoves(name, verb, object)}</p>
    <p>🧠 ${sentencePresent(name, verb, object)}</p>
    <p>🎯 ${sentenceFuture(name, verb, object)}</p>
  `;
});

function formatName(name) {
  return name.trim().charAt(0).toUpperCase() + name.trim().slice(1);
}

function sentenceLoves(name, verb, object) {
  return `${name} loves to ${verb} ${object}.`;
}

function sentencePresent(name, verb, object) {
  return `${name} is ${verb}ing ${object} right now!`;
}

function sentenceFuture(name, verb, object) {
  return `One day, ${name} will ${verb} ${object}.`;
}
