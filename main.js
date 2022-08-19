let nav__links = document.querySelector(".nav__links");
let bars = document.querySelector("#bars");
bars.addEventListener("click", function () {
  //alert("hello world");
  nav__links.classList.toggle("show");
  bars.classList.toggle("fa-times");
});
