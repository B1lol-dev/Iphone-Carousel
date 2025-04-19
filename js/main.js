const iphone = document.getElementById("iphone");

// rocks
const rock_stand = document.querySelector(".rock_stand");
const rock_left = document.querySelector(".rock_left");
const rock_right = document.querySelector(".rock_right");

iphone.addEventListener("mouseenter", () => {
  rock_stand.style.translate = "0px 50px";

  rock_left.style.translate = "-50px 50px";
  rock_right.style.translate = "50px 50px";
});

iphone.addEventListener("mouseleave", () => {
  rock_stand.style.translate = "";

  rock_left.style.translate = "";
  rock_right.style.translate = "";
});
