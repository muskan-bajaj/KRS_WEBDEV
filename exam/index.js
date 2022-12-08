var rBtn = document.getElementById("red");
var bBtn = document.getElementById("blue");
var gBtn = document.getElementById("green");
var yBtn = document.getElementById("yellow");
var pBtn = document.getElementById("pink");

rBtn.addEventListener("click", () => {
  rBtn.innerHTML = "RED BUTTON TEXT";
  bBtn.innerHTML = "";
  gBtn.innerHTML = "";
  yBtn.innerHTML = "";
  pBtn.innerHTML = "";
  bBtn.style.width = "10%";
  rBtn.style.width = "50%";
  gBtn.style.width = "10%";
  yBtn.style.width = "10%";
  pBtn.style.width = "10%";
});
bBtn.addEventListener("click", () => {
  bBtn.innerHTML = "BLUE BUTTON TEXT";
  rBtn.innerHTML = "";
  gBtn.innerHTML = "";
  yBtn.innerHTML = "";
  pBtn.innerHTML = "";
  bBtn.style.width = "50%";
  rBtn.style.width = "10%";
  gBtn.style.width = "10%";
  yBtn.style.width = "10%";
  pBtn.style.width = "10%";
});
gBtn.addEventListener("click", () => {
  gBtn.innerHTML = "GREEN BUTTON TEXT";
  rBtn.innerHTML = "";
  bBtn.innerHTML = "";
  yBtn.innerHTML = "";
  pBtn.innerHTML = "";
  gBtn.style.width = "50%";
  rBtn.style.width = "10%";
  bBtn.style.width = "10%";
  yBtn.style.width = "10%";
  pBtn.style.width = "10%";
});
yBtn.addEventListener("click", () => {
  yBtn.innerHTML = "YELLOW BUTTON TEXT";
  rBtn.innerHTML = "";
  bBtn.innerHTML = "";
  gBtn.innerHTML = "";
  pBtn.innerHTML = "";
  yBtn.style.width = "50%";
  rBtn.style.width = "10%";
  gBtn.style.width = "10%";
  bBtn.style.width = "10%";
  pBtn.style.width = "10%";
});
pBtn.addEventListener("click", () => {
  pBtn.innerHTML = "PINK BUTTON TEXT";
  rBtn.innerHTML = "";
  bBtn.innerHTML = "";
  gBtn.innerHTML = "";
  yBtn.innerHTML = "";
  bBtn.innerHTML = "";
  pBtn.style.width = "50%";
  rBtn.style.width = "10%";
  gBtn.style.width = "10%";
  yBtn.style.width = "10%";
  bBtn.style.width = "10%";
});
