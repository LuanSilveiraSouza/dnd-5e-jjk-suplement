document.addEventListener("nav", () => {
  const backToTop = () => {
    window.scrollTo(0, 0);
  }

  for (const backToTopButton of document.getElementsByClassName("backtotop")) {
    backToTopButton.addEventListener("click", backToTop)
    window.addCleanup(() => backToTopButton.removeEventListener("click", backToTop))
  }
})
