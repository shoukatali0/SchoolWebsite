'use strict';



/**
 * add event on element
 */



const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header active when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElem = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElem);

// Function to handle the intersection changes
// Function to check if an element is in the viewport
// Function to handle the intersection changes
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

const boxes = document.querySelectorAll('.test');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
   const triggerBottom = (window.innerHeight / 5) * 4;

   boxes.forEach((box) => {
      const boxTop = box.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
         box.classList.add('show');
      } else {
         box.classList.remove('show');
      }
   });
}

window.addEventListener("scroll", reveal);

const boxes1 = document.querySelectorAll('.test1');

window.addEventListener('scroll', checkBoxes1);

checkBoxes1();

function checkBoxes1() {
   const triggerBottom = (window.innerHeight / 5) * 4;

   boxes1.forEach((box) => {
      const boxTop = box.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
         box.classList.add('show');
      } else {
         box.classList.remove('show');
      }
   });
}



// image gallary

// create references to the modal...
var modal = document.getElementById('myModal');
// to all images -- note I'm using a class!
var images = document.getElementsByClassName('myImages');
// the image in the modal
var modalImg = document.getElementById("img01");
// and the caption in the modal
var captionText = document.getElementById("caption");

// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  // and attach our click listener for this image.
  img.onclick = function(evt) {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

//slider
const first = () => {
  document.getElementById("slide").src = "./assets/images/front2.jpeg";
};
setInterval(first, 4000);

const second = () => {
  document.getElementById("slide").src = "./assets/images/front1.jpg";
};
setInterval(second, 8000);

const third = () => {
  document.getElementById("slide").src = "./assets/images/build.png";
};
setInterval(third, 6000);

