// import BoogleBoard from "./boggle-board.js"

var dummyData =
[ [ 'C', 'G', 'S', 'I' ],
  [ 'T', 'J', 'S', 'I' ],
  [ 'N', 'M', 'E', 'E' ],
  [ 'R', 'P', 'Y', 'A' ] ];

function goRound(){
  var goRound = []
  const go = [-1, 0, 1]
  for (let i = 0; i < 3; i++){
    for (let j = 0; j < 3; j++){
      goRound.push([go[i], go[j]]);
    }
  }
  return goRound
}

class Boggled{
  constructor(kataCari, data){
    this.kataCari = kataCari;
    this.data = data;
    this.hasil = []
    this.start = ""
    this.point = 1
    this.goRound = goRound()
  }
  objektify(){
    let hasil = []
    for (let i = 0; i < this.data.length; i++){
      for (let j = 0; j < this.data[i].length; j++){
        let ini = {}
        ini["huruf"] = this.data[i][j]
        ini["posisi"] = [i, j]
        this.hasil.push(ini)
      }
    }
    return this.hasil
  }

  searchIndex() {
    for (let i = 0; i < this.kataCari.length; i++){
      for (let j = 0; j < this.hasil.length; j++){
        if (this.hasil[j].huruf == this.kataCari[i]){
        return this.start = this.hasil[j]
        }
      }
    }
    return "Not Found"
  }

  searchNext() {

  }

  //endofclass
}
//"MESS"
var bog = new Boggled("MESS", dummyData)

bog.objektify();
bog.searchIndex();
console.log(goRound());
