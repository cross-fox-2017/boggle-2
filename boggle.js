class BoggleBoard {
  constructor() {
    this.alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    this.arr = [];
    this.arr2 = [];
    this.position = [];
  }

  shake(size, size2 = 4) {
    for (let i = 0; i < size; i++) {
      this.arr.push([]);
    }
    for (let j = 0; j < size; j++) {
      for (let k = 0; k < size2; k++) {
        let index = Math.floor(Math.random() * this.alphabet.length);
        this.arr[j].push(this.alphabet[index]);
      }
    }
    return this.arr;
  }

  dummy(size, size2 = 4) {
    for (let i = 0; i < size; i++) {
      this.arr2.push([]);
    }
    this.arr2[0].push('Q','V','T','C');
    this.arr2[1].push('D','A','Y','P');
    this.arr2[2].push('R','V','X','R');
    this.arr2[3].push('S','Z','F','F');
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

  possibilities() {
    let arr = [];
    for (let i = 0; i < this.position.length; i++) {
      arr.push([])
    }
    arr[0].push([0,1],[1,0],[1,1]);
    arr[1].push([0,0],[0,2],[1,0],[1,1],[1,2]);
    arr[2].push([0,1],[0,3],[1,1],[1,2],[1,3]);
    arr[3].push([0,2],[1,2],[1,3]);
    arr[4].push([0,0],[0,1],[1,1],[2,0],[2,1]);
    arr[5].push([0,0],[0,1],[0,2],[1,0],[1,2],[2,0],[2,1],[2,2]);
    arr[6].push([0,1],[0,2],[0,3],[1,1],[1,3],[2,1],[2,2],[2,3]);
    arr[7].push([0,2],[0,3],[1,2],[2,2],[2,3]);
    arr[8].push([1,0],[1,1],[2,1],[3,0],[3,1]);
    arr[9].push([1,0],[1,1],[1,2],[2,0],[2,2],[3,0],[3,1],[3,2]);
    arr[10].push([1,1],[1,2],[1,3],[2,1],[2,3],[3,1],[3,2],[3,3]);
    arr[11].push([1,2],[1,3],[2,2],[3,2],[3,3]);
    arr[12].push([2,0],[2,1],[3,1]);
    arr[13].push([2,0],[2,1],[2,2],[3,0],[3,2]);
    arr[14].push([2,1],[2,2],[2,3],[3,1],[3,3]);
    arr[15].push([2,2],[2,3],[3,2]);
    return arr;
  }

  solve() {
    let res = [];
    for (let i = 0; i < test[0].length; i++) {
      for (let j = 0; j < this.arr2.length; j++) {
        for (let k = 0; k < this.arr2[j].length; k++) {
          if (test[0][i] === this.arr2[j][k]) {
            res.push(this.arr2[j][k]);
          }
        }
      }
    }
    console.log(res);
  }
}

var test = ['DAY'];
var bog = new BoggleBoard();

console.log(bog.dummy(4));
console.log(bog.positions());
bog.possibilities();
bog.solve();
