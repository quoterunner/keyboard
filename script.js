const allowedLetters = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
  "space",
];

document.addEventListener("keydown", function (e) {
  var key = e.key.toLowerCase();

  if (key == " ") {
    key = "space";
  }

  if (allowedLetters.includes(key)) {
    var keyboardKey = document.getElementById("key-" + key);
    keyboardKey.style.backgroundColor = "black";
  }
});

document.addEventListener("keyup", function (e) {
  var key = e.key.toLowerCase();

  if (key == " ") {
    key = "space";
  }

  if (allowedLetters.includes(key)) {
    var keyboardKey = document.getElementById("key-" + key);
    keyboardKey.style.backgroundColor = "grey";
  }
});
