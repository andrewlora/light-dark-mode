const DARK_THEME = "dark";
const LIGHT_THEME = "light";
const DARK_TITLE = "Dark Theme";
const LIGHT_TITLE = "Light Theme";
const SUN_CLASS_THEME = "fa-sun";
const MOON_CLASS_THEME = "fa-moon";
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

// Dark or Light Images
function imageMode(color) {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

function toggleDarkLightMode(isDark) {
  nav.style.backgroundColor = isDark
    ? "rgb(0 0 0 / 50%)"
    : "rgb(255 255 255 / 50%)";
  textBox.style.backgroundColor = isDark
    ? "rgb(255 255 255 / 50%)"
    : "rgb(0 0 0 / 50%)";
  toggleIcon.children[0].textContent = isDark ? DARK_TITLE : LIGHT_TITLE;
  isDark
    ? toggleIcon.children[1].classList.replace(
        SUN_CLASS_THEME,
        MOON_CLASS_THEME
      )
    : toggleIcon.children[1].classList.replace(
        MOON_CLASS_THEME,
        SUN_CLASS_THEME
      );
  isDark ? imageMode(DARK_THEME) : imageMode(LIGHT_THEME);
}

// Switch Theme Dynamically
function switchTheme(event) {
  event.target.checked
    ? document.documentElement.setAttribute("data-theme", DARK_THEME)
    : document.documentElement.setAttribute("data-theme", LIGHT_THEME);
  event.target.checked
    ? localStorage.setItem("theme", DARK_THEME)
    : localStorage.setItem("theme", LIGHT_THEME);
  toggleDarkLightMode(event.target.checked);
}

// Event Listener
toggleSwitch.addEventListener("change", switchTheme);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    toggleDarkLightMode(true);
  }
}
