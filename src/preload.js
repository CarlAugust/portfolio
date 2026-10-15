const root = document.querySelector(":root");
const currentTheme = localStorage.getItem("data-theme");
root.setAttribute("data-theme", currentTheme);