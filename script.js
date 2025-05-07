const saveBtn = document.getElementById("saveBtn");
const colorPicker = document.getElementById("colorPicker");
const box = document.getElementById("box");

const savedColor = localStorage.getItem("favoriteColor");
if (savedColor) {
  colorPicker.value = savedColor;
  box.style.backgroundColor = savedColor;
}

saveBtn.addEventListener("click", () => {
  const selectedColor = colorPicker.value;
  localStorage.setItem("favoriteColor", selectedColor);
  box.style.backgroundColor = selectedColor;
  box.classList.add("animate");
  setTimeout(() => {
    box.classList.remove("animate");
  }, 1000);
});
