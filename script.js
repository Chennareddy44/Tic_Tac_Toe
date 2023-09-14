const heading = document.getElementById("main-heading");
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
    if (arr[a] && arr[a] === arr[b] && arr[b] === arr[c]) {
      heading.innerText = `'${currentPlayer}' won! 💐`;
      disableClicks = true;
      setTimeout(() => {
        reload();
      }, 3000);
    }
  }

  if (!arr.includes(null)) {
    heading.innerText = `Draw!`;
    setTimeout(() => {
      reload();
    }, 3000);
  }
}

function reload() {
  setTimeout(() => location.reload(), 3000);
}

function handleClick(el) {
  if (disableClicks) return;
  const id = Number(el.id);
  if (arr[id] != null) return;
  arr[id] = currentPlayer;
  checkWinner();
  el.innerText = currentPlayer;
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}


// function checkWinner() {
//   if (
//     (arr[0] != null && arr[0] == arr[1] && arr[1] == arr[2]) ||
//     (arr[3] != null && arr[3] == arr[4] && arr[4] == arr[5]) ||
//     (arr[6] != null && arr[6] == arr[7] && arr[7] == arr[8]) ||
//     (arr[0] != null && arr[0] == arr[3] && arr[3] == arr[6]) ||
//     (arr[1] != null && arr[1] == arr[4] && arr[4] == arr[7]) ||
//     (arr[2] != null && arr[2] == arr[5] && arr[5] == arr[8]) ||
//     (arr[0] != null && arr[0] == arr[4] && arr[4] == arr[8]) ||
//     (arr[2] != null && arr[2] == arr[4] && arr[4] == arr[6])
//   ) {
//     document.write(`${currentPlayer} Won!`);
//     return;
//   }
//   if (!arr.includes(null)) {
//     document.write("Draw!");
//     return;
//   }
// }
