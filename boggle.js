import {BoogleBoard} from "./boggle-board.js"
import {words} from "./data.js"

var dummyData =
[ [ 'C', 'G', 'S', 'I' ],
  [ 'T', 'J', 'S', 'I' ],
  [ 'N', 'M', 'E', 'E' ],
  [ 'R', 'P', 'Y', 'A' ] ];

class Boggled{
  constructor(kataCari, data){
    this.kataCari = kataCari.toUpperCase();
    this.data = data;
    this.hasil = []
    this.start = ""
    this.point = 1
    this.finish = false
    this.val = 0
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

  searchIndexAwal() {
    for (let j = 0; j < this.hasil.length; j++){
      if (this.hasil[j].huruf == this.kataCari[0]){
        this.start = this.hasil[j]
      return true
      }
    }
    return false
  }

  searchNext() {
    while (!this.finish && this.val < 10){
      let modka = 0, modki = 0, mini = 0, mina = 0
      if (this.start.posisi[0] != 0){
        modki = -1
      }
      if (this.start.posisi[1] != 0){
        modka = -1
      }
      let kiri = this.start.posisi[0] +modki
      let kanan = this.start.posisi[1] +modka
      if (kiri == 0){mini = -1}
      if (kanan == 0){mina = -1}
      for (let i = kiri; i < kiri +2 +mini; i++){
        for (let j = kanan; j < kanan +2 +mina; j++ ){
          if (this.start.posisi == [i,j] || i < 0 || j < 0 || i > 3 || j > 3){
          } else if (this.data[i][j] == this.kataCari[this.point]){
            this.start.posisi = [i,j]
            this.start.huruf = this.kataCari[this.point]
            this.point++
            break;
          }
        }
      }
      this.val++
      if (this.point == this.kataCari.length){
        this.finish = true
        return true
      }
    }
    return false
  }
  running(){
    this.objektify();
    if (this.searchIndexAwal()){
      return this.searchNext()
    } else { return false}
  }
}

function viaKamus(board){
  let hasil = []
  console.log(board);
  for (let i = 0; i < words.length; i++){
    let solve = new Boggled(words[i], board)
    if (solve.running()){
      hasil.push(words[i])
    }
  }
  return `${hasil}\nditemukan ${hasil.length} kata dikamus pada board`
}
var papan = new BoogleBoard(4,4)
console.log(viaKamus(papan.shake()));
// var bog = new Boggled("ntr", dummyData)
// console.log(dummyData);
// console.log(bog.running());
