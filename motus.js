import data from "./test.json" assert { type: "json" };

export default class Motus {
  constructor() {
    this.init();
  }
  init() {
    this.currentrow = 0
    this.currentcolumn = 1
    this.words = data;
    const i = Math.floor(Math.random() * data.length - 1) + 1;
    this.word = data[i];
    this.drawBoard();
    this.getWord();
    // faire en sorte que toute les cases soit false (lettre qui ont trouver)
    //represente toute les lettres qui on été trouvé  
    this.wordtable = Array.from({length:this.word.length}, (i) => i = false )
    //       R         I            S          Q         U        E
    //      Oui       Non          Oui         Non      Non      Non
     
    //première case a true
    this.wordtable[0] = true

  }

  // je déssine le tableau
  drawBoard() {

    //je récupère l'id du tableau
    const board = document.getElementById("board");
    console.log(board);
    // je fais une boucle pour creer les lignes de 6 cases
    for (let i = 0; i < 6; i++) {


      const row = document.createElement("div");
      // dans la div creer je crée une id propre dans la ligne
      row.setAttribute("id", `row${i}`);

      //j'ajiute une class
      row.classList.add(`rows`);

      //j'affiche dans mon tableau ou j'ai recup l'id la ligne suivis des cases
      board.appendChild(row);

      for (let j = 0; j < this.word.length; j++) {
        const Cellule = document.createElement("div");

        row.appendChild(Cellule);

        Cellule.setAttribute("id", `cellule${i}.${j}`);
        Cellule.classList.add("cell");
      }
    }
    this.putLetter(this.word[0], 0, 0)
  }



  putLetter(letter, i, j) {

    const x = document.getElementById(`cellule${i}.${j}`);

    x.innerHTML = letter.toUpperCase();


  }

  keyBoardInput(key){

    if(key.length == 1 && key.match(/[a-z]/i)){
       
      this.putLetter(key,this.currentrow,this.currentcolumn);
      //je vérifie si la lettre du mot sur laquelle j'ai appuier  correspond  a la lettre ou je suis
      if (key === this.word[this.currentcolumn] ){
          
        this.wordtable[this.currentcolumn] = true

      }
      this.currentcolumn++;
      while (this.currentcolumn < this.word.length && this.wordtable[this.currentcolumn] == true) {
        this.currentcolumn++;
    }
      if(this.currentcolumn === this.word.length){
     
      this.currentcolumn = this.wordtable.findIndex( (v)=> v == false)
                 
      this.currentrow++
        
      for(let j = 0; j < this.word.length; j++ ){

        if(this.wordtable[j] === true){

          //passe sur toute les case de word table si oui je passe a a ligne correspondante 
          this.putLetter(this.word[j], this.currentrow, j )

        }

      }


      }
    }

  }

  getWord() {
    console.log(this.word[0]);
  }
}
