let creatures = [
  [
    "      ▄▀▄─────▄▀▄",
    "     ▄█░░▀▀▀▀▀░░█▄",
    " ▄▄  █░░░░░░░░░░░█  ▄▄",
    "█▄▄█ █░░▀░░┬░░▀░░█ █▄▄█"
  ],
  [
    "     (_)    | |   ",
    " _ __ _ _ __| | __",
    "| '__| |/ __| |/ /",
    "| |  | | (__|   <",
    "|_|  |_|\\___|_|\\_\\"
  ]
];

function random(min, max) {
  return min + Math.random() * (max - min);
}

let creatureIndex = Math.round(random(0, creatures.length - 1));

for (let i = 0; i < creatures[creatureIndex].length; i++) {
  console.log("");
}

for (let i = 0; i < creatures[creatureIndex].length; i++) {
  setTimeout(function() {
    console.log(`\x1b[${i + 2}F`);
    for (let a = 0; a <= i; a++) {
      console.log(`\x1b[0J\x1b[38:5:76m${creatures[creatureIndex][a]}`);
    }
  }, i * 100);
}
