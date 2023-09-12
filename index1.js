const buttons = document.querySelectorAll(".btn");
let inputDisp = document.getElementById("disp");

// Click event listener for buttons
buttons.forEach((element, index) => {
  element.addEventListener("click", () => {
    const buttonVal = element.textContent;
    console.log(buttonVal);
    if (buttonVal === "=") {
      evaluate();
    } else if (buttonVal === "C") {
      clear();
    } else {
      show(buttonVal);
    }
  });
});
// Adds the value logged into the display
const show = (buttonVal) => {
  console.log("val is", buttonVal);
  inputDisp.value += buttonVal;
};
// Evaluation of result
const evaluate = () => {
  if (inputDisp.value.includes("x")) {
    inputDisp.value = inputDisp.value.replace(/x/g, "*");
  }
  const res = eval(inputDisp.value);
  inputDisp.value = res;
};
// Clear Button Logic
const clear = () => {
  inputDisp.value = "";
};

// Cancel Button Logic
const cancel = document.querySelector(".btn-cancel");
cancel.addEventListener("click", () => {
  inputDisp.value = inputDisp.value.substring(0, inputDisp.value.length - 1);
});
