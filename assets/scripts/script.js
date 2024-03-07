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

VANTA.GLOBE({
  el: "#my-background",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00
});

function moveToSelected(element) {

  if (element == "next") {
    var selected = $(".selected").next();
  } else if (element == "prev") {
    var selected = $(".selected").prev();
  } else {
    var selected = element;
  }

  var next = $(selected).next();
  var prev = $(selected).prev();
  var prevSecond = $(prev).prev();
  var nextSecond = $(next).next();

  $(selected).removeClass().addClass("selected");

  $(prev).removeClass().addClass("prev");
  $(next).removeClass().addClass("next");

  $(nextSecond).removeClass().addClass("nextRightSecond");
  $(prevSecond).removeClass().addClass("prevLeftSecond");

  $(nextSecond).nextAll().removeClass().addClass('hideRight');
  $(prevSecond).prevAll().removeClass().addClass('hideLeft');

}

$(document).keydown(function (e) {
  switch (e.which) {
    case 37:
      moveToSelected('prev');
      break;

    case 39:
      moveToSelected('next');
      break;

    default: return;
  }
  e.preventDefault();
});

$('#carousel div').click(function () {
  moveToSelected($(this));
});

$('#prev').click(function () {
  moveToSelected('prev');
});

$('#next').click(function () {
  moveToSelected('next');
});

(function () {
  emailjs.init({
    publicKey: 'nslWycLQiJRAv9BXX',
  });
})();

function SendMail(event) {
  event.preventDefault();

  var params = {
    from_name: document.getElementById("fullName").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value
  };

  emailjs.send("service_k5fv8og", "template_zaablqm", params)
    .then(function (res) {
      alert("Email has been succesfully sent! " + res.status);
    })
    .catch(function (error) {
      console.error("Error sending email:", error);
    });
}

document.addEventListener("DOMContentLoaded", function () {

  const projectVideos = document.querySelectorAll(".project-video");


  projectVideos.forEach(projectVideo => {

    projectVideo.addEventListener("mouseover", function (e) {
      this.play();
    });

    projectVideo.addEventListener("mouseout", function (e) {
      this.pause();
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector('.CV');
  const tooltip = document.querySelector('.CV-tooltip');
  const video = document.querySelector('.CV-video');

  button.addEventListener("mouseover", function () {
    tooltip.style.display = 'block';
    video.play();
  });

  button.addEventListener("mouseout", function () {
    tooltip.style.display = 'none';
    video.pause();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'typing 5s steps(40) forwards';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  let typingContainer = document.querySelector('.typing-container');
  observer.observe(typingContainer);
});