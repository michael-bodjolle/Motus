import data from "./test.json" assert { type: "json" };

export default class Motus {
  constructor() {
    this.init();
  }
  init() {
    this.words = data;
    const i = Math.floor(Math.random() * data.length - 1) + 1;
    this.word = data[i];
    this.drawBoard();
    this.getWord();
  }

  drawBoard() {
    const board = document.getElementById("board");
    console.log(board);

    for (let i = 0; i < 6; i++) {
      

      const row = document.createElement("div");

      row.setAttribute("id", `row`);
      row.classList.add(`row${i}`);
      
      board.appendChild(row);
       
      for (let j = 0; j < this.word.length; j++) {
        const Cellule = document.createElement("div");
        if (i == 0 && j == 0) {
          Cellule.append(this.word[0]);
        }

        row.appendChild(Cellule);

        Cellule.setAttribute("id", "cell");
        Cellule.classList.add(`Cellule${j}`);
      }
    }
  }

  getWord() {
    console.log(this.word[0]);
  }
}
