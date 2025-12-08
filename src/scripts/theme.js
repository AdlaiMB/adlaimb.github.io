const theme = (() => {
  const localStorageTheme = localStorage?.getItem("theme") ?? "";
  if (["dark", "light"].includes(localStorageTheme)) {
    return localStorageTheme;
  }
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
})();

if (theme === "dark") {
  document.documentElement.classList.remove("light");
} else {
  document.documentElement.classList.add("light");
}

window.localStorage.setItem("theme", theme);

const handleToggleClick = () => {
  const element = document.documentElement;
  element.classList.toggle("light");

  const isLight = element.classList.contains("light");
  localStorage.setItem("theme", isLight ? "light" : "dark");
};

document
  .getElementById("theme-button")
  ?.addEventListener("click", handleToggleClick);
