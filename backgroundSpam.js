function random(min, max) {
  let rand = min + Math.random() * (max - min);
  rand = Math.round(rand);
  return rand;
}

let number = random(1, 10000000000000000);
let phrases = ["Hello world!", "You have been hacked!!", Error(number)];
let errorType = [
  ReferenceError + ": ",
  Error + ": ",
  ReferenceError + ": ",
  Error + ": ",
  ReferenceError(number),
  ReferenceError,
  Error
];

let a = setInterval(function() {
  console.log(phrases[Math.floor(Math.random() * phrases.length)]);
  number = random(1, 10000000000000000);
  errorType[4] = ReferenceError(number);
  phrases[2] = errorType[Math.floor(Math.random() * errorType.length)];
  if (phrases[2] === ReferenceError + ": " || phrases[2] === Error + ": ") {
    phrases[2] = phrases[2] + number;
  }
}, 100);

// setTimeout(function() {
//   clearInterval(a);
// }, 10000);
