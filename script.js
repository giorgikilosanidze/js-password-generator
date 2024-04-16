const input = document.querySelector("input");
const copyImg = document.querySelector(".copy");
const btn = document.querySelector("button");
const eyeImg = document.querySelector(".closed");
const p = document.querySelector("p");
const strength = document.querySelector(".strength");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+-=<>,.?/;':[{]}`~";
const length = 12;
const all = upperCase + lowerCase + number + symbol;

btn.addEventListener("click", (e) => {
    e.preventDefault();
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (password.length < length) {
        password += all[Math.floor(Math.random() * all.length)];
    };

    input.value = password;
    passwordStrength();
});

copyImg.addEventListener("click", () => {
    input.select();
    navigator.clipboard.writeText(input.value);
});

eyeImg.addEventListener("click", () => {
    if (input.type === "password") {
        input.type = "text";
        eyeImg.src = "images/eye-open.png";
    } else {
        input.type = "password";
        eyeImg.src = "images/eye-close.png";
    };
});

input.addEventListener("input", passwordStrength);

function passwordStrength() {
    if (input.value.length === 0) {
        p.style.display = "none";
        input.style.border = "none";
    } else if (input.value.length < 6) {
        p.style.display = "block";
        strength.textContent = "weak.";
        p.style.color = "red";
        input.style.border = "2px solid red";

    } else if (input.value.length < 10) {
        p.style.display = "block";
        strength.textContent = "medium.";
        p.style.color = "yellow";
        input.style.border = "2px solid yellow";

    } else {
        p.style.display = "block";
        strength.textContent = "strong.";
        p.style.color = "darkgreen";
        input.style.border = "2px solid darkgreen";
    };
};