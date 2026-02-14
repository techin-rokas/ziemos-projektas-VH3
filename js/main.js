const burgerBtn = document.getElementById("burgerBtn");
const burgerIcon = document.getElementById("burgerIcon");
const sideMenu = document.getElementById("sideMenu");

let isOpen = false;

function updateBurgerState(open) {
  isOpen = open;

  const label = open ? "Close menu" : "Open menu";

  sideMenu.classList.toggle("open", open);
  document.body.classList.toggle("menu-open", open);
  document.body.style.overflow = open ? "hidden" : "";

  burgerIcon.src = open ? "images/close.svg" : "images/menu.svg";

  burgerBtn.setAttribute("aria-expanded", open);
  burgerBtn.setAttribute("aria-label", label);
  burgerBtn.setAttribute("title", label);
  sideMenu.setAttribute("aria-hidden", !open);

  if (open) {
    const firstLink = sideMenu.querySelector("a");
    if (firstLink) firstLink.focus();
  } else {
    burgerBtn.focus();
  }
}

burgerBtn.addEventListener("click", () => {
  updateBurgerState(!isOpen);
});

document.addEventListener("click", (e) => {
  if (!isOpen) return;

  if (!sideMenu.contains(e.target) && !burgerBtn.contains(e.target)) {
    updateBurgerState(false);
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && isOpen) {
    updateBurgerState(false);
  }
});
