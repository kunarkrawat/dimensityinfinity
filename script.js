let open_menu = document.getElementById("open-menu");
let close_menu = document.getElementById("close-menu");
let menu = document.querySelector(".navbar .menu-btn");

open_menu.onclick = function () {
  menu.style.display = "block";
  open_menu.style.display = "none";
  open_menu.style.pointerEvents = "none";
  close_menu.style.display = "block"
}

close_menu.onclick = function () {
  menu.style.display = "none";
  open_menu.style.display = "block";
  close_menu.style.display = "none"
  open_menu.style.pointerEvents = "auto";
}




// document.addEventListener('contextmenu', function (event) {
//   event.preventDefault();
// });