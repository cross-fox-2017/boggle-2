class BoggleBoard {
  constructor() {
    this.huruf = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    this.arr = [];
    this.arr2 = [];
    this.position = [];
  }

  shake(panjang, lebar = 4) {
    for (let i = 0; i < panjang; i++) {
      this.arr.push([]);
    }
    for (let j = 0; j < panjang; j++) {
      for (let k = 0; k < lebar; k++) {
        let index = Math.floor(Math.random() * this.huruf.length);
        this.arr[j].push(this.huruf[index]);
      }
    }
    return this.arr;
  }

  tes(panjang, lebar = 4) {
    for (let i = 0; i < panjang; i++) {
      this.arr2.push([]);
    }
    this.arr2[0].push('E','V','T','C');
    this.arr2[1].push('A','S','K','P');
    this.arr2[2].push('R','F','I','X');
    this.arr2[3].push('O','Z','F','F');
    return this.arr2;
  }

  positions() {
    for (let i = 0; i < this.arr2.length; i++){
      for(let j = 0; j < this.arr2[i].length; j++){
        this.position.push({
          huruf: this.arr2[i][j],
          position: [i,j]
        })
      }
    }
    return this.position;
  }

  solve() {
    let hasil = [];
    for (let i = 0; i < test[0].length; i++) {
      for (let j = 0; j < this.arr2.length; j++) {
        for (let k = 0; k < this.arr2[j].length; k++) {
          if (test[0][i] === this.arr2[j][k]) {
            hasil.push(this.arr2[j][k]);
          }
        }
      }
    }
    console.log(hasil);
  }
}

var test = ['ASK'];

var boggle = new BoggleBoard();

console.log(boggle.tes(4));
boggle.solve();
