// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
const palette = document.querySelectorAll(".color");
const current = document.querySelector("#current-color");
for (let color of palette) {
  color.addEventListener("click", () => {
    current.style.background = color.style.background;
  });
}

const cells = document.querySelectorAll(".cell");
for (let cell of cells) {
  cell.addEventListener("click", () => {
    cell.style.background = current.style.background;
  });
}