import data from './mots.json' assert {type: 'json'};

export default class Motus {
  constructor() {
    this.init()
  }
  init() {
    this.words = data
    this.drawBoard()
    this.getWord()
  }
  
  drawBoard() {

    const board = document.getElementById('board')
    console.log(board)

    for (let i = 0; i < 6; i++) {
      const row = document.createElement("div");

      row.setAttribute("id", `row`)
      row.classList.add(`row${i}`)


      board.appendChild(row)

      for (let j = 0; j < this.words[0].mot.length; j++) {

        const Cellule = document.createElement("div");

        row.appendChild(Cellule)

        Cellule.setAttribute("id", 'cell')
        Cellule.classList.add(`Cellule${j}`)
      }


    }
    

  }

  getWord(){
  const words = data
  console.log(words[0].mot.length)
  }



}


