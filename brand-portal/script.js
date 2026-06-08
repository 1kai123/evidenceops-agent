const toast = document.querySelector("#toast");

document.querySelectorAll("[data-copy]").forEach((button) => {
  button.addEventListener("click", async () => {
    const value = button.dataset.copy;
    try {
      await navigator.clipboard.writeText(value);
      toast.textContent = `${value} copied`;
      toast.classList.add("show");
      window.setTimeout(() => toast.classList.remove("show"), 1400);
    } catch {
      toast.textContent = value;
      toast.classList.add("show");
      window.setTimeout(() => toast.classList.remove("show"), 1400);
    }
  });
});
