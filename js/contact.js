const form = document.querySelector("#contactForm");

const ERROR_MESSAGES = {
  valueMissing: "This field can't be empty",
  typeMismatch: "Please use a valid format",
  tooShort: "Value is too short",
};

function getErrorMessage(input) {
  const v = input.validity;

  if (v.valueMissing) return ERROR_MESSAGES.valueMissing;

  // email typeMismatch 
  if (v.typeMismatch) return "Please enter a valid email address";

  if (v.tooShort) return ERROR_MESSAGES.tooShort;

  return "Invalid value";
}

function showFieldError(input) {
  const field = input.closest(".contact-form__field");
  const errorEl = field.querySelector(".contact-form__error");

  field.classList.add("contact-form__field--error");
  errorEl.textContent = getErrorMessage(input);
}

function clearFieldError(input) {
  const field = input.closest(".contact-form__field");
  const errorEl = field.querySelector(".contact-form__error");

  field.classList.remove("contact-form__field--error");
  errorEl.textContent = "";
}

// 1) Po submit – patikrinam visus laukus
form.addEventListener("submit", (e) => {
  // sustabdom realų submit, kol forma netvarkinga
  if (!form.checkValidity()) {
    e.preventDefault();

    const inputs = form.querySelectorAll("input, textarea");
    inputs.forEach((input) => {
      // tik required laukams 
      if (input.required && !input.checkValidity()) {
        showFieldError(input);
      } else {
        clearFieldError(input);
      }
    });

    // fokusas į pirmą blogą lauką
    const firstInvalid = form.querySelector(":invalid");
    if (firstInvalid) firstInvalid.focus();
  }
});

// 2) Kai vartotoja pradeda taisyti – klaida dingsta “gyvai”
form.addEventListener("input", (e) => {
  const el = e.target;
  if (!(el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement)) return;

  // jei field buvo error state, atnaujink būseną
  if (el.closest(".contact-form__field")?.classList.contains("contact-form__field--error")) {
    if (el.checkValidity()) clearFieldError(el);
  }
});