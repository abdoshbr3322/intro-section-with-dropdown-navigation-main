let megaEs = Array.from(document.querySelectorAll(".mega"));
let menuOpeners = Array.from(document.querySelectorAll(".opener"));
let navBar = document.querySelector(".nav");
let icons = Array.from(document.querySelectorAll(".arrow"));

menuOpeners.forEach((opener) => {
  opener.addEventListener("click", () => {
    let parent = opener.parentElement;
    let icon = opener.firstElementChild;
    if (parent.classList.contains("active")) {
      removeAllActive();
      rotateIcon(icon, true);
    } else {
      removeAllActive();
      rotateIcon(icon, false);
      parent.classList.toggle("active");
    }
  });
});

window.onclick = function (e) {
  let target = e.target;
  if (
    !target.classList.contains("opener") &&
    !target.classList.contains("mega-menu")
  ) {
    removeAllActive();
    rotateAllIcons();
  }
};

function removeAllActive() {
  megaEs.forEach((mega) => {
    mega.classList.remove("active");
  });
}

function rotateAllIcons() {
  icons.forEach((icon) => {
    rotateIcon(icon, true);
  });
}

function rotateIcon(icon, opened) {
  let iconSrc = icon.getAttribute("src");
  if (!opened) {
    icon.setAttribute("src", iconSrc.replace("down", "up"));
  } else {
    icon.setAttribute("src", iconSrc.replace("up", "down"));
  }
}

// fix navbar on small screens

let rightSection = document.querySelector("header .right");

let fixed;

fixNavBar();

window.addEventListener("resize", fixNavBar);

function fixNavBar() {
  let login = document.querySelector(".login");
  let rigist = document.querySelector(".rigist");
  if (window.innerWidth < 767) {
    navBar.appendChild(login);
    navBar.appendChild(rigist);
    fixed = true;
  } else if (fixed) {
    rightSection.appendChild(login);
    rightSection.appendChild(rigist);
    closeNav();
  }
}

// Open Nav On Click

let menuIcon = document.querySelector(".right .menu-icon");
let closeIcon = document.querySelector(".nav .close");

menuIcon.addEventListener("click", openNav);
closeIcon.addEventListener("click", closeNav);
window.addEventListener("click", (e) => {
  if (e.target.classList.contains("overlay")) {
    closeNav();
  }
});

function openNav() {
  navBar.classList.add("active");
}
function closeNav() {
  navBar.classList.remove("active");
}

// calculate height for home page

// let header = document.querySelector("header");
// let homeSection = document.querySelector(".home")

// calculateHeight();

// window.addEventListener("resize" ,() => {
//   setTimeout(calculateHeight ,10)
// });

// function calculateHeight () {
//   homeSection.style.height = 
//   `calc(100vh - ${header.getBoundingClientRect().height}px)`
// }