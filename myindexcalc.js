// Element Targetting
const display = document.getElementById("disp");
const cancel = document.querySelector(".btn-cancel");
const calc = document.querySelectorAll(".btn")[15];

// Evaluate Button Logic
calc.addEventListener("click", () => {
  if (display.value.includes("x")) {
    display.value = display.value.replace(/x/g, "*");
  } 
  let evaluate = eval(display.value);
  console.log(evaluate);
  display.value = evaluate;
});

// Operators
btn1.addEventListener("click", () => {
  display.value = display.value + 1;
});
btn2.addEventListener("click", () => {
  display.value = display.value + 2;
});
btn3.addEventListener("click", () => {
  display.value = display.value + 3;
});
btn4.addEventListener("click", () => {
  display.value = "";
});
btn5.addEventListener("click", () => {
  display.value = display.value + 4;
});
btn6.addEventListener("click", () => {
  display.value = display.value + 5;
});
btn7.addEventListener("click", () => {
  display.value = display.value + 6;
});
btn8.addEventListener("click", () => {
  display.value = display.value + "+";
});
btn9.addEventListener("click", () => {
  display.value = display.value + 7;
});
btn10.addEventListener("click", () => {
  display.value = display.value + 8;
});
btn11.addEventListener("click", () => {
  display.value = display.value + 9;
});
btn12.addEventListener("click", () => {
  display.value = display.value + "-";
});
btn13.addEventListener("click", () => {
  display.value = display.value + 0;
});
btn14.addEventListener("click", () => {
  display.value = display.value + "/";
});
btn15.addEventListener("click", () => {
  display.value = display.value + ".";
});
btn17.addEventListener("click", () => {
  display.value = display.value + "x";
});

// Cancel Button Onscreen
cancel.addEventListener("click", () => {
  display.value = display.value.substring(0, display.value.length - 1);
});
