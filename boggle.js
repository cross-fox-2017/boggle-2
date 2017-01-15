class BoggleBoard {
  constructor(){
    this.boggleBoard = []
    this.words = this.data()
  }

  shake(x = 4, y = 4){
    let huruf = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let acak = shuffle(huruf)
    // huruf import dari data.js
    let increment = 0;

    // for limit ganti agar dinamis 4 * 4
    for(let i = 0; i < y; i++){
      let arr = [];
      this.boggleBoard.push(arr);
      for(let j = 0; j < x; j++){
        this.boggleBoard[i].push(huruf[increment]);
        increment++
      }
    }
    return this.boggleBoard
  }

  position() {
    let arr = []
    for(let i = 0; i < this.boggleBoard.length; i++){
      for(let j = 0; j < this.boggleBoard[i].length; j++){
        arr.push({
          huruf: this.boggleBoard[i][j],
          x: i,
          y: j
        })
      }
    }
    return arr
  }

  solve() {
    let arr = []
    for(let i = 0; i < this.words.length; i++){
      let x = 0
      for(let j = 0; j < this.words[i].length; j++){
        for(let k = 0; k < this.boggleBoard.length; k++){
          for(let l = 0; l < this.boggleBoard[k].length; l++){
            if(this.boggleBoard[k][l] === this.words[i][j]){
              x++
              if(x === this.words[i].length){
                arr.push(i);
              }
            }
          }
        }
      }
    }
    
    let arr2 = []
    for(let i = 0; i < arr.length; i++){
      for(let j = 0; j < this.words[arr[i]].length; j++){
        for(let k = 0; k < this.boggleBoard.length; k++){
          for(let l = 0; l < this.boggleBoard[k].length; l++){
            if(this.boggleBoard[k][l] === this.words[arr[i]][j]){
              arr2.push({
                huruf: this.boggleBoard[k][l],
                x: k,
                y: l,
                i: arr[i]
              })
            }
          } 
        }
      }
    }

    let final = [];
    for(let i = 0; i < arr.length; i++){
      final.push(this.words[arr[i]]);
    }

    return console.log(final)
  }

  data() {
    let words = ['ABCD','EFGH','IJKL','MNOP','QRST','UVWX','YZ'];
    return words
  }

  print(){
    return console.log(this.boggleBoard);
  }
}

// helper function
function shuffle(array) {
  let counter = array.length;
  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter--;

    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}


let boggleBoard = new BoggleBoard();

boggleBoard.shake();
boggleBoard.print();
boggleBoard.position()
boggleBoard.solve()
