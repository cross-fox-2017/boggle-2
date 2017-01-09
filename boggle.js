class BoggleBoard {
  constructor(){
    this.boggleBoard = []
    this.words = this.data()
  }

  shake(x = 4, y = 4){
    let huruf = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    // huruf import dari data.js
    let randomIndex = Math.floor(Math.random() * 26);

    // for limit ganti agar dinamis 4 * 4
    for(let i = 0; i < y; i++){
      let arr = [];
      this.boggleBoard.push(arr);
      for(let j = 0; j < x; j++){
        this.boggleBoard[i].push(huruf[randomIndex]);
        randomIndex = Math.floor(Math.random() * 26);
      }
    }
    return this.boggleBoard
  }

  solve() {
    let arr = []
    for(let i = 0; i < y; i++){
      for(let j = 0; j < x; j++){
        arr.push(this.words.indexOf(this.boggleBoard))
      }
    }

    // return console.log(this.words[0].length)
    return console.log(this.boggleBoard)
    
  }

  data() {
    // let words = ['AA','AB','AC','AD','EF','GH','IJ','KL','MN','OPQ','RST','UVW','XYZ'];
    let words = ['AB']
    return words
  }

  print(){
    return console.log(this.boggleBoard);
  }
}

let boggleBoard = new BoggleBoard();
boggleBoard.shake();
boggleBoard.print()
boggleBoard.solve()
