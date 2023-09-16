const heading = document.getElementById("main-heading");
const cells = document.querySelectorAll(".col");

let currentPlayer = "X";
let arr = Array(9).fill(null);
let disableClicks = false;

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // Rows
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // Columns
  [0, 4, 8],
  [2, 4, 6], // Diagonals
];

function checkWinner() {
  for (const combo of winningCombos) {
    const [a, b, c] = combo;
    if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
      heading.innerText = `'${currentPlayer}' won! 💐`;
      disableClicks = true;
      setTimeout(reload, 2000);
      return;
    }
  }

  if (!arr.includes(null)) {
    heading.innerText = `Draw!`;
    disableClicks = true;
    setTimeout(reload, 2000);
  }
}

function reload() {
  location.reload();
}

function handleClick(el) {
  if (disableClicks) return;
  const id = Number(el.id);
  if (arr[id] != null) return;
  arr[id] = currentPlayer;
  el.innerText = currentPlayer;
  checkWinner();
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

cells.forEach((cell) => {
  cell.addEventListener("click", () => handleClick(cell));
});
