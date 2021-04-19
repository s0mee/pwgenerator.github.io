const pwElem = document.getElementById("pw");
const copyElem = document.getElementById("copy");
const lenElem = document.getElementById("len");
const upperElem = document.getElementById("upper");
const lowerElem = document.getElementById("lower");
const numberElem = document.getElementById("number");
const symbolElem = document.getElementById("symbol");
const generateElem = document.getElementById("generate");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

function getLowercase() {
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}
function getUppercase() {
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}
function getNumber() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}
function getSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
  const len = lenElem.value;

  let password = "";

  for (let i = 0; i < len; i++) {
    const x = generateX();
    password += x;
  }

  pwElem.innerText = password;
}

function generateX() {
  const xs = [];
  if (upperElem.checked) {
    xs.push(getUppercase());
  }

  if (lowerElem.checked) {
    xs.push(getLowercase());
  }

  if (numberElem.checked) {
    xs.push(getNumber());
  }

  if (symbolElem.checked) {
    xs.push(getSymbol());
  }

  return xs[Math.floor(Math.random() * xs.length)];
}

generateElem.addEventListener("click", generatePassword);
