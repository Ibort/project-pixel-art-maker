// Select color input
var color = '#000000';
const colorPick = document.querySelector('#colorPicker');
colorPick.addEventListener("input", colorChange);

// Select size input
// When size is submitted by the user, call makeGrid()
const size = document.querySelector('#sizePicker');
const grid = document.querySelector('#pixelCanvas');
size.addEventListener('submit', makeGrid);
grid.addEventListener('click', draw);

// Select color input function
function colorChange(event) {
  color = event.target.value;
}

function makeGrid() {
  let width = size.querySelector('#inputWidth').value;
  let height = size.querySelector('#inputHeight').value;
  // Clear the Table content out
  grid.innerHTML = "";
  // drawing the grid
  for (let row = 0; row < height; row++) {
    const newRow = document.createElement('tr');
    grid.appendChild(newRow);
    for (let column = 0; column < width; column++) {
      const newCube = document.createElement('td');
      newRow.appendChild(newCube);
    }
  }
  event.preventDefault();
}

// Coloring the grid
function draw() {
  let cube = event.target.closest('td');
  if (cube !== null){
    cube.style.backgroundColor = color;
  }
}
