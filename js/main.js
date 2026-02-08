const burgerBtn = document.getElementById("burgerBtn");
const burgerIcon = document.getElementById("burgerIcon");
const sideMenu = document.getElementById("sideMenu");

burgerBtn.addEventListener("click", () => {
  const isOpen = sideMenu.classList.toggle("open");

  burgerIcon.src = isOpen ? "images/close.svg" : "images/menu.svg";
  burgerBtn.setAttribute("aria-expanded", isOpen);
  sideMenu.setAttribute("aria-hidden", !isOpen);

  document.body.style.overflow = isOpen ? "hidden" : "";

  if (isOpen) {
    sideMenu.querySelector("a").focus();
  }
});

document.addEventListener("click", (e) => {
  if (!sideMenu.classList.contains("open")) return;

  if (!sideMenu.contains(e.target) && !burgerBtn.contains(e.target)) {
    sideMenu.classList.remove("open");
    burgerIcon.src = "images/menu.svg";
    document.body.style.overflow = "";
    burgerBtn.setAttribute("aria-expanded", "false");
    sideMenu.setAttribute("aria-hidden", "true");
    burgerBtn.focus();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && sideMenu.classList.contains("open")) {
    sideMenu.classList.remove("open");
    burgerIcon.src = "images/menu.svg";
    document.body.style.overflow = "";
    burgerBtn.setAttribute("aria-expanded", "false");
    sideMenu.setAttribute("aria-hidden", "true");
    burgerBtn.focus();
  }
});
