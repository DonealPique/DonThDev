const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});

const dynamicText = document.querySelector("h2 .display-text");
const words = [" I'm Doneal Piqué", " a Software Developer", " And a Student at the Bit Academy"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
  const currentWord = words[wordIndex];
  const currentChar = currentWord.substring(0, charIndex);
  dynamicText.textContent = currentChar;
  dynamicText.classList.add("stop-blinking");

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(typeEffect, 200);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 100);
  } else {
    isDeleting = !isDeleting;
    dynamicText.classList.remove("stop-blinking");
    wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
    setTimeout(typeEffect, 1200);
  }
}

typeEffect();

const quotes = [
  "Code is like humor. When you have to explain it, it’s bad. - Cory House",
  "The code you write makes you a programmer. The code you delete makes you a good one. The code you don't have to write makes you a great one. - Mario Fusco",
  "First, solve the problem. Then, write the code. - John Johnson",
  "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live. - John Woods",
  "The best error message is the one that never shows up. - Thomas Fuchs",
  "The most important property of a program is whether it accomplishes the intention of its user. - C.A.R. Hoare",
  "Programs must be written for people to read, and only incidentally for machines to execute. - Harold Abelson",
  "Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime. - Muhammad Waseem",
  "Walking on water and developing software from a specification are easy if both are frozen. - Edward V Berard",
  "Programming is not about typing, it's about thinking. - Rich Hickey",
  "I'm not a great programmer; I'm just a good programmer with great habits. - Kent Beck",
  "The function of good software is to make the complex appear to be simple. - Grady Booch"
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

const displayText = document.querySelector('.display-text');
const quoteContainer = document.querySelector('.quote');
displayText.textContent = 'World';
quoteContainer.textContent = getRandomQuote();
const btn = document.querySelector('.btn');
btn.addEventListener('click', function () {
  displayText.textContent = 'World';
  quoteContainer.textContent = getRandomQuote();
});

// achterground
VANTA.GLOBE({
  el: "#my-background",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00
})