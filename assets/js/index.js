// nav bar
const nav = document.getElementById("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    nav.style.boxShadow = "0 0 5px black";
  } else {
    nav.style.boxShadow = "none";
  }
});

// active section
const items = document.querySelectorAll(".menu > .item");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionOffset = section.offsetTop;

    if (window.scrollY >= sectionOffset - 100) {
      currentSection = section.getAttribute("id");
    }
  });

  items.forEach((item) => {
    item.classList.remove("item--active");
    if (item.classList.contains(currentSection)) {
      item.classList.add("item--active");
    }
  });
});

// menu btn
const menuBtn = document.getElementById("menuBtn");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("show");
});
