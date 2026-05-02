const themeToggle = document.getElementById("theme-toggle");
const themeKey = "theme-preference";

const applyTheme = (theme) => {
  document.body.dataset.theme = theme;

  if (themeToggle) {
    themeToggle.textContent = theme === "sunset" ? "Switch to sunrise" : "Switch to sunset";
  }
};

const savedTheme = localStorage.getItem(themeKey);
const preferredTheme = savedTheme === "sunrise" || savedTheme === "light" ? "sunrise" : "sunset";

applyTheme(preferredTheme);

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const nextTheme = document.body.dataset.theme === "sunset" ? "sunrise" : "sunset";
    applyTheme(nextTheme);
    localStorage.setItem(themeKey, nextTheme);
  });
}
