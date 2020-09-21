let dropdown = document.querySelector(".drop-down");
let dropdownIcon = document.querySelector("#drop-down");
let dropdownMenu = document.querySelector(".drop-down-menu");
dropdown.addEventListener("click", (event) => {
  console.log("clicked");
  if (dropdownMenu.classList.contains("not-visible")) {
    dropdownMenu.classList.remove("not-visible");
    dropdownIcon.innerText = "X";
  } else {
    dropdownMenu.classList.add("not-visible");
    dropdownIcon.innerHTML = "&#9776;";
  }
});
