window.addEventListener("load", () => {
  const motus = document.createElement("div");
   

//   const tab = new Table()
//   class Table {}

 for (let i = 0; i < 6; i++) 
  {
    const row = document.createElement("div");
    
    motus.appendChild(row)

     for (let j = 0; j < 6; j++) {

        const Cellule = document.createElement("div");

        row.appendChild(Cellule)

     }
    
    cell.innerHTML = "Cellule " + (i + 1);
    
  }

  document.body.appendChild(table);
});
