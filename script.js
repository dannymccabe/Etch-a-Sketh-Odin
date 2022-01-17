const grid = document.querySelector(".gridContainer");
const userInput = document.getElementById("quantity");
const resetButton = document.querySelector(".reset");

// loop through to make grid dynamically
createGrid = () => {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    grid.appendChild(div);
  }
};

// allow for user input `${onput}`
updateGrid = () => {
  grid.innerHTML = "";
  grid.style.setProperty(
    "grid-template-columns",
    `repeat(${userInput.value}, 2fr)`
  );
  
  // set grid styles
  grid.style.setProperty(
    "grid-template-rows",
    `repeat(${userInput.value}, 2fr)`
  );

  //loop through using user input values
  for (let i = 0; i < userInput.value * userInput.value; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    grid.appendChild(div);
  }
  console.log(userInput.value);
};

// add event listener for mouseover event
const square = document.querySelector("div");
square.addEventListener("mouseover", function(event) {
  event.target.classList.replace("square", "color");
});

// allow user to update grid
userInput.addEventListener("change", updateGrid);

// clear all when button is clicked to reset
resetButton.addEventListener("click", function() {
  grid.innerHTML = "";
  userInput.value = "";
  grid.style.setProperty("grid-template-columns", `repeat(16, 2fr)`);
  grid.style.setProperty("grid-template-rows", `repeat(16, 2fr)`);
  createGrid();
});

createGrid();

