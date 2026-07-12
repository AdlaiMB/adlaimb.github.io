const navigationDropDownButton = document.getElementById(
  "webpage-header-navigation-drop-down-button",
);

navigationDropDownButton.addEventListener("click", () => {
  const isExpanded =
    navigationDropDownButton.getAttribute("aria-expanded") === "true";
  navigationDropDownButton.setAttribute("aria-expanded", `${!isExpanded}`);
});
