const burgerBtn = document.getElementById("burgerBtn");
const burgerIcon = document.getElementById("burgerIcon");
const sideMenu = document.getElementById("sideMenu");

function updateBurgerState(isOpen) {
  const label = isOpen ? "Close menu" : "Open menu";

  sideMenu.classList.toggle("open", isOpen);
  burgerIcon.src = isOpen ? "images/close.svg" : "images/menu.svg";

  burgerBtn.setAttribute("aria-expanded", isOpen);
  burgerBtn.setAttribute("aria-label", label);
  burgerBtn.setAttribute("title", label);

  sideMenu.setAttribute("aria-hidden", !isOpen);
  document.body.style.overflow = isOpen ? "hidden" : "";
}

burgerBtn.addEventListener("click", () => {
  const isOpen = !sideMenu.classList.contains("open");
  updateBurgerState(isOpen);

  if (isOpen) {
    const firstLink = sideMenu.querySelector("a");
    if (firstLink) firstLink.focus();
  }
});

document.addEventListener("click", (e) => {
  if (!sideMenu.classList.contains("open")) return;

  if (!sideMenu.contains(e.target) && !burgerBtn.contains(e.target)) {
    updateBurgerState(false);
    burgerBtn.focus();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && sideMenu.classList.contains("open")) {
    updateBurgerState(false);
    burgerBtn.focus();
  }
});
