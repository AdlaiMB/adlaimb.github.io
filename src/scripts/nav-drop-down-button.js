const navigationDropDownButton = document.getElementById(
  "webpage-header-navigation-drop-down-button",
);
const navigationLinks = document.querySelectorAll(
  ".webpage-header-navigation-link",
);

navigationDropDownButton.addEventListener("click", () => {
  const isDropDownVisible =
    navigationDropDownButton.getAttribute("aria-expanded") === "true";
  navigationDropDownButton.setAttribute(
    "aria-expanded",
    `${!isDropDownVisible}`,
  );
});

navigationLinks.forEach((navigationLink) =>
  navigationLink.addEventListener("click", () => {
    const isDropDownVisible =
      navigationDropDownButton.getAttribute("aria-expanded") === "true";

    if (isDropDownVisible) {
      navigationDropDownButton.setAttribute("aria-expanded", "false");
    }
  }),
);
