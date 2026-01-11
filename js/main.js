const burgerBtn = document.getElementById("burgerBtn");
const burgerIcon = document.getElementById("burgerIcon");
const sideMenu = document.getElementById("sideMenu");

burgerBtn.addEventListener("click", () => {
  const isOpen = sideMenu.classList.toggle("open");

  burgerIcon.src = isOpen ? "images/close.svg" : "images/menu.svg";

  document.body.style.overflow = isOpen ? "hidden" : "";
});

document.addEventListener("click", (e) => {
  if (!sideMenu.classList.contains("open")) return;

  if (!sideMenu.contains(e.target) && !burgerBtn.contains(e.target)) {
    sideMenu.classList.remove("open");
    burgerIcon.src = "images/menu.svg";
    document.body.style.overflow = "";
  }
});
