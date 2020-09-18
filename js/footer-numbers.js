(() => {
  const telBtnRef = document.querySelector("[data-footer-button]");
  const telContRef = document.querySelector("[data-footer-number]");

  telBtnRef.addEventListener("click", () => {
    const expanded =
      telBtnRef.getAttribute("aria-expanded") === "true" || false;

    telBtnRef.classList.toggle("is-open");
    telBtnRef.setAttribute("aria-expanded", !expanded);

    telContRef.classList.toggle("is-open");
  });
})();
