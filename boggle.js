// import BoogleBoard from "./boggle-board.js"

var dummyData =
[ [ 'C', 'G', 'S', 'I' ],
  [ 'T', 'J', 'S', 'I' ],
  [ 'N', 'M', 'E', 'E' ],
  [ 'R', 'P', 'Y', 'A' ] ];

class Boggled{
  constructor(){
    this.hasil = []
  }
  objektify(data){
    let hasil = []
    for (let i = 0; i < data.length; i++){
      for (let j = 0; j < data[i].length; j++){
        let ini = {}
        ini["huruf"] = data[i][j]
        ini["posisi"] = [i, j]
        this.hasil.push(ini)
      }
    }
    return this.hasil
  }

  searchIndex(text) {
    for (let i = 0; i < text.length; i++){
      for (let j = 0; j < this.hasil.length; j++){
        if (this.hasil[j].huruf == text[i]){
        return this.hasil[j]
        }
      }
    }
    return 1
  }
  //endofclass
}
//"MESS"
var bog = new Boggled()

bog.objektify(dummyData);
console.log(bog.searchIndex("MESS"));
// console.log(bog.hasil[0].huruf);
