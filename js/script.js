// Get all cells
const cells = document.querySelectorAll('td');

// Get all buttons
const buttons = document.querySelectorAll('button');

// Set colour
let fill = " ";

// Handle the click event on cells
function handleCell(e) {
  //this.style.backgroundColor = colour;
  this.innerHTML = fill;
}

// Handle the click event on buttons
function handleButton(e) {
  console.log(this.name);
  if (this.name == "Blank")
    fill = " ";
  else if (this.name == "X")
    fill = "X";
  else if (this.name == "Slash")
    fill = "/";
  else if (this.name == "Plus")
    fill = "+";
  else if (this.name == "GT")
    fill = ">";
  else if (this.name == "O")
    fill = "O";
  else if (this.name == "Hash")
    fill = "#";
  console.log(fill);
}

// Add event listener to each cell
cells.forEach(cell => cell.addEventListener('click', handleCell));

// Add event listener to each button
buttons.forEach(button => button.addEventListener('click', handleButton));
