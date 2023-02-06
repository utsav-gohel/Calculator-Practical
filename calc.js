var screen = document.querySelector("#screen");
var btn = document.querySelectorAll(".btn");
for (item of btn) {
  item.addEventListener("click", (e) => {
    btntext = e.target.innerText;
    if (btntext == "x") {
      btntext = "*";
    }
    if (btntext == "/") {
      btntext = "/";
    }
    screen.value = screen.value + btntext;
    // console.log(screen.value, btntext);
  });
}
function sin() {
  screen.value = Math.sin(screen.value);
}
function cos() {
  screen.value = Math.cos(screen.value);
}
function tan() {
  screen.value = Math.tan(screen.value);
}
function pow() {
  screen.value = Math.pow(screen.value, 2);
}
function sqrt() {
  screen.value = Math.sqrt(screen.value, 2);
}
function log() {
  screen.value = Math.log10(screen.value);
}
function pi() {
  screen.value = Math.PI;
}
function e() {
  screen.value = Math.exp(screen.value);
}

function fact() {
  var i, num, f;
  f = 1;
  num = screen.value;
  for (i = 1; i <= num; i++) {
    f = f * i;
  }
  i = i - 1;
  screen.value = f;
}
function backspc() {
  screen.value = screen.value.substr(0, screen.value.length - 1);
}
let ms;
function memory_store() {
  ms = screen.value;
  screen.value = "";
  console.log(ms);
}

function memory_clear() {
  ms = "";
  screen.value = "";
}

function memoryPlus() {
  screen.value = Number(screen.value) + Number(ms);
  ms = screen.value;
}

function memoryMinus() {
  screen.value = Math.abs(Number(screen.value) - Number(ms));
  ms = screen.value;
}

function memory_read() {
  screen.value = ms;
}
function syntaxError() {
  if (eval(screen.value) == SyntaxError) {
    screen.value = "Syntax Error";
  }
}

function onebyx() {
  screen.value = 1 + "/" + screen.value;
}

function ln() {
  screen.value = Math.log(screen.value);
}

// function mod() {
//   screen.value = screen.value + "%";
// }
function plusMinus() {
  if (screen.value.charAt(0) === "-") {
    screen.value = screen.value.slice(1);
  } else {
    screen.value = "-" + screen.value;
  }
}

function power() {
  screen.value = Math.pow(10, screen.value);
}

function xPowY() {
  // screen.value = Math.pow(screen.value, screen.value);
  screen.value = screen.value + "^";
}

function exp() {
  screen.value = Math.exp(screen.value);
}
