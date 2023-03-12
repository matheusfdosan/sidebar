const burguer = document
  .querySelector(".menu")
  .addEventListener("click", () => {
    document.querySelector("aside").classList.toggle("closed")
    document.querySelector("main").style.flex = "12"
  })
