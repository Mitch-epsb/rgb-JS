// RGB Colors
let red = document.getElementById("red");
let green = document.getElementById("green");
let blue = document.getElementById("blue");
let btn = document.getElementById("btn");
let dis = document.getElementById("display");
let val = document.getElementById("value");
let pwidth = document.getElementById("prew");
let pheight = document.getElementById("preh");
let dark = document.getElementById("darkBtn");
let light = document.getElementById("lightBtn");
let body = document.getElementById("body");

pwidth.value = 400;
pheight.value = 200;

dark.addEventListener("click", rundark);
light.addEventListener("click", runlight);
red.addEventListener("input", runpre);
green.addEventListener("input", runpre);
blue.addEventListener("input", runpre);
pwidth.addEventListener("change", rundis);
pheight.addEventListener("change", rundis);

function runpre() {
  let r = +red.value;
  let b = +blue.value;
  let g = +green.value;

  if (r > 255) {
    red.value = 255;
    r = 255;
  } else if (r < 0) {
    red.value = 0;
    r = 0;
  }
  if (g > 255) {
    green.value = 255;
    g = 255;
  } else if (g < 0) {
    green.value = 0;
    g = 0;
  }
  if (b > 255) {
    blue.value = 255;
    b = 255;
  } else if (b < 0) {
    blue.value = 0;
    b = 0;
  }
  let rgb = "rgb(" + r + "," + g + "," + b + ")";
  dis.style.background = rgb;
  val.innerHTML = rgb;
}

function rundis() {
  let w = +pwidth.value;
  let h = +pheight.value;
  dis.style.width = w + "px";
  dis.style.height = h + "px";
  console.log(w);
}

function rundark() {
  body.style.background = "rgba(0,0,0,0.7)";
  body.style.color = "white";
}
function runlight() {
  body.style.background = "rgba(255,255,255,0.7)";
  body.style.color = "black";
}
