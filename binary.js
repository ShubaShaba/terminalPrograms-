let bits = [false];

function ifAllArrayElements(array, meaning) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== meaning) {
      return false;
    } else if (i === array.length - 1) {
      return true;
    }
  }
}

function render() {
  let number = "";

  for (let i = 0; i < bits.length; i++) {
    let bit = bits[i];
    if (bit) {
      number += "1";
    } else {
      number += "0";
    }
  }
  console.log(
    `\x1b[1m\x1b[38:5:220m${number}` +
      "\x1b[38:5:166m: " +
      Number("0b" + number)
  );
}

function counting() {
  if (ifAllArrayElements(bits, true)) {
    bits.unshift(false);
  }

  for (let i = bits.length - 1; i >= 0; i--) {
    if (bits[i]) {
      bits[i] = false;
    } else {
      bits[i] = true;
      break;
    }
  }
  render();
}

setInterval(counting, 10);
