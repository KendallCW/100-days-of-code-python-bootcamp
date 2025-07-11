const wordList = [
  'abruptly','absurd','abyss','affix','askew','avenue','awkward','axiom','azure',
  'bagpipes','bandwagon','banjo','bayou','beekeeper','bikini','blitz','blizzard',
  'boggle','bookworm','boxcar','boxful','buckaroo','buffalo','buffoon','buxom',
  'buzzard','buzzing','buzzwords','caliph','cobweb','cockiness','croquet','crypt',
  'curacao','cycle','daiquiri','dirndl','disavow','dizzying','duplex','dwarves',
  'embezzle','equip','espionage','euouae','exodus','faking','fishhook','fixable',
  'fjord','flapjack','flopping','fluffiness','flyby','foxglove','frazzled','frizzled',
  'fuchsia','funny','gabby','galaxy','galvanize','gazebo','giaour','gizmo','glowworm',
  'glyph','gnarly','gnostic','gossip','grogginess','haiku','haphazard','hyphen',
  'iatrogenic','icebox','injury','ivory','ivy','jackpot','jaundice','jawbreaker',
  'jaywalk','jazziest','jazzy','jelly','jigsaw','jinx','jiujitsu','jockey','jogging',
  'joking','jovial','joyful','juicy','jukebox','jumbo','kayak','kazoo','keyhole',
  'khaki','kilobyte','kiosk','kitsch','kiwifruit','klutz','knapsack','larynx','lengths',
  'lucky','luxury','lymph','marquis','matrix','megahertz','microwave','mnemonic',
  'mystify','naphtha','nightclub','nowadays','numbskull','nymph','onyx','ovary',
  'oxidize','oxygen','pajama','peekaboo','phlegm','pixel','pizazz','pneumonia','polka',
  'pshaw','psyche','puppy','puzzling','quartz','queue','quips','quixotic','quiz',
  'quizzes','quorum','razzmatazz','rhubarb','rhythm','rickshaw','schnapps','scratch',
  'shiv','snazzy','sphinx','spritz','squawk','staff','strength','strengths','stretch',
  'stronghold','stymied','subway','swivel','syndrome','thriftless','thumbscrew',
  'topaz','transcript','transgress','transplant','triphthong','twelfth','twelfths',
  'unknown','unworthy','unzip','uptown','vaporize','vixen','vodka','voodoo','vortex',
  'voyeurism','walkway','waltz','wave','wavy','waxy','wellspring','wheezy','whiskey',
  'whizzing','whomever','wimpy','witchcraft','wizard','woozy','wristwatch','wyvern',
  'xylophone','yachtsman','yippee','yoked','youthful','yummy','zephyr','zigzag',
  'zigzagging','zilch','zipper','zodiac','zombie'
];

const stages = [
  `  +---+\n  |   |\n  O   |\n /|\\  |\n / \\  |\n      |\n=========`,
  `  +---+\n  |   |\n  O   |\n /|\\  |\n /    |\n      |\n=========`,
  `  +---+\n  |   |\n  O   |\n /|\\  |\n      |\n      |\n=========`,
  `  +---+\n  |   |\n  O   |\n /|   |\n      |\n      |\n=========`,
  `  +---+\n  |   |\n  O   |\n  |   |\n      |\n      |\n=========`,
  `  +---+\n  |   |\n  O   |\n      |\n      |\n      |\n=========`,
  `  +---+\n  |   |\n      |\n      |\n      |\n      |\n=========`
];

let chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
let display = Array(chosenWord.length).fill("_");
let lives = 6;
let guessedLetters = [];

document.getElementById("display").textContent = display.join(" ");
document.getElementById("livesCount").textContent = lives;
document.getElementById("hangmanStage").textContent = stages[lives];

document.getElementById("guessForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const input = document.getElementById("guessInput");
  const guess = input.value.toLowerCase();
  input.value = "";

  if (!guess.match(/[a-z]/) || guess.length !== 1) {
    alert("Please enter a valid letter.");
    return;
  }

  if (guessedLetters.includes(guess)) {
    alert(`You've already guessed '${guess}'.`);
    return;
  }

  guessedLetters.push(guess);
  document.getElementById("guessedList").textContent = guessedLetters.join(", ");

  if (chosenWord.includes(guess)) {
    for (let i = 0; i < chosenWord.length; i++) {
      if (chosenWord[i] === guess) display[i] = guess;
    }
  } else {
    lives--;
    document.getElementById("livesCount").textContent = lives;
  }

  document.getElementById("display").textContent = display.join(" ");
  document.getElementById("hangmanStage").textContent = stages[lives];

  if (!display.includes("_")) {
    endGame("🎉 YOU WIN!");
  } else if (lives === 0) {
    endGame(`💀 YOU LOSE! The word was: ${chosenWord}`);
  }
});

function endGame(message) {
  document.getElementById("endMessage").textContent = message;
  document.getElementById("guessInput").disabled = true;
}
