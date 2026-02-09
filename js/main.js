const form = document.querySelector("#newsletter-form");
const hint = document.querySelector("#form-hint");

if (form && hint) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = form.querySelector("#email")?.value?.trim();
    if (!email) {
      hint.textContent = "Veuillez saisir un email.";
      return;
    }

    hint.textContent = "Merci ! Inscription enregistrée.";
    form.reset();
  });
}
