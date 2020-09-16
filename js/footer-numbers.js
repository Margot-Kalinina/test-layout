(() => {
  const telBtnRef = document.querySelector("[footer-telephone-button]");
  const telContRef = document.querySelector("[footer-telephone-container]");

  telBtnRef.addEventListener("click", () => {
    const expanded =
      telBtnRef.getAttribute("aria-expanded") === "true" || false;

    telBtnRef.classList.toggle("is-open");
    telBtnRef.setAttribute("aria-expanded", !expanded);

    telContRef.classList.toggle("is-open");
  });
})();
