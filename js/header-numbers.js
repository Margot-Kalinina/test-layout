(() => {
  const telBtnRef = document.querySelector("[data-header-button]");
  const telContRef = document.querySelector("[data-header-number]");

  telBtnRef.addEventListener("click", () => {
    const expanded =
      telBtnRef.getAttribute("aria-expanded") === "true" || false;

    telBtnRef.classList.toggle("is-open");
    telBtnRef.setAttribute("aria-expanded", !expanded);

    telContRef.classList.toggle("is-open");
  });
})();
