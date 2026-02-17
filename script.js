function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

let themes = ["theme-blue", "theme-green", "theme-purple"];
let currentTheme = 0;

function switchTheme() {
  // Remove existing theme classes
  themes.forEach(theme => document.body.classList.remove(theme));
  
  // Apply next theme
  currentTheme = (currentTheme + 1) % themes.length;
  document.body.classList.add(themes[currentTheme]);
}