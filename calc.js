//We are accesing every event from screen input tag
var screen = document.querySelector("#screen");

//we are accesing every event from screen btn tag
var btn = document.querySelectorAll(".btn");

//Attaching event listener to the buttons
for (item of btn) {
  item.addEventListener("click", (e) => {
    btntext = e.target.innerText;
    screen.value = screen.value + btntext;
    // console.log(screen.value, btntext);
  });
}

const sin = () => {
  screen.value = Math.sin(screen.value);
};
const cos = () => {
  screen.value = Math.cos(screen.value);
};
const tan = () => {
  screen.value = Math.tan(screen.value);
};
const pow = () => {
  screen.value = Math.pow(screen.value, 2);
};
const sqrt = () => {
  screen.value = Math.sqrt(screen.value, 2);
};
const log = () => {
  screen.value = Math.log10(screen.value);
};
const pi = () => {
  screen.value = Math.PI;
};
const e = () => {
  screen.value = Math.exp(screen.value);
};

const fact = () => {
  var i, num, f;
  f = 1;
  num = screen.value;
  for (i = 1; i <= num; i++) {
    f = f * i;
  }
  i = i - 1;
  screen.value = f;
};
const backspc = () => {
  screen.value = screen.value.substr(0, screen.value.length - 1);
};
let ms;
const memory_store = () => {
  ms = screen.value;
  screen.value = "";
  console.log(ms);
};

const memory_clear = () => {
  ms = "";
  screen.value = "";
};

const memoryPlus = () => {
  screen.value = Number(screen.value) + Number(ms);
  ms = screen.value;
};

const memoryMinus = () => {
  screen.value = Math.abs(Number(screen.value) - Number(ms));
  ms = screen.value;
};

const memory_read = () => {
  screen.value = ms;
};
const syntaxError = () => {
  if (eval(screen.value) == SyntaxError) {
    screen.value = "Syntax Error";
  }
};

const onebyx = () => {
  screen.value = 1 + "/" + screen.value;
};

const ln = () => {
  screen.value = Math.log(screen.value);
};

const absolute = () => {
  screen.value = Math.abs(screen.value);
};
const plusMinus = () => {
  if (screen.value.charAt(0) === "-") {
    screen.value = screen.value.slice(1);
  } else {
    screen.value = "-" + screen.value;
  }
};

const power = () => {
  screen.value = Math.pow(10, screen.value);
};

const random = () => {
  screen.value = Math.random(screen.value);
};
