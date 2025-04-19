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

// controls
const stand = document.querySelector(".stand");
// filter: drop-shadow(0 0 100px white);
const controls = document.querySelector(".controls");
const title = document.querySelector(".title");

function changeIphone(color) {
  iphone.src = `./assets/iphones/iphone_${color}.png`;
  title.innerText = color;

  document.querySelector(".bg_overlay").remove();
  const bgOverlayElm = document.createElement("div");
  bgOverlayElm.className = "bg_overlay";
  bgOverlayElm.style.backgroundColor = `var(--ip-${color})`;
  stand.appendChild(bgOverlayElm);
}
