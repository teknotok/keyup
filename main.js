document.getElementById("input-id").focus();

const text = "text will be here";
const arrayText = Array.from(text);

const input = document.querySelector(".input-class-ok");
let index = -1;

input.addEventListener("keyup", (e) => {
  if (e.key !== "Backspace") {
    index += 1;
  }
  if (input.value === "") {
    index = -1;
  }
  if (e.key === "Backspace") {
    if (index !== -1) {
      index -= 1;
      console.log(index);
    }
  }
  if (e.key === arrayText[index]) {
    input.setAttribute("class", "input-class-ok");
    console.log("OK");
  } else {
    input.setAttribute("class", "input-class-error");
    console.log("error");
  }
});
