const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const sizeEl = document.getElementById("length");

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "123456789";
const symbols = "!@#$%^&*()_-+<>,./?";

const formEl = document.querySelector("form");
const passDisplay = document.querySelector(".password__display");

formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    passDisplay.innerText = "";

    const size = sizeEl.value;

    let password = [];

    if (uppercaseEl.checked) {
        password.push(uppercase[Math.floor(Math.random() * uppercase.length)]);
    }
    if (lowercaseEl.checked) {
        password.push(lowercase[Math.floor(Math.random() * lowercase.length)]);
    }
    if (numbersEl.checked) {
        password.push(numbers[Math.floor(Math.random() * numbers.length)]);
    }
    if (symbolsEl.checked) {
        password.push(symbols[Math.floor(Math.random() * symbols.length)]);
    }
    let passF = password.join("");
    for (i = password.length; i < size; i++) {
        const x = generatePass();
        passF += x;
    }

    passDisplay.innerText = passF;
});

function generatePass() {
    let xs = [];
    if (uppercaseEl.checked) {
        xs.push(uppercase[Math.floor(Math.random() * uppercase.length)]);
    }
    if (lowercaseEl.checked) {
        xs.push(lowercase[Math.floor(Math.random() * lowercase.length)]);
    }
    if (numbersEl.checked) {
        xs.push(numbers[Math.floor(Math.random() * numbers.length)]);
    }
    if (symbolsEl.checked) {
        xs.push(symbols[Math.floor(Math.random() * symbols.length)]);
    }

    if (xs.length === 0) {
        return "";
    }
    return xs[Math.floor(Math.random() * xs.length)];
}


const copyEl = document.getElementById("copy-btn");

copyEl.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const password = passDisplay.innerText;

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password copied to clipboard");
});
