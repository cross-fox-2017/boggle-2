// import BoogleBoard from "./boggle-board.js"

var dummyData =
[ [ 'C', 'G', 'S', 'I' ],
  [ 'T', 'J', 'S', 'I' ],
  [ 'N', 'M', 'E', 'E' ],
  [ 'R', 'P', 'Y', 'A' ] ];

function objektify(data){
  let hasil = []
  for (let i = 0; i < data.length; i++){
    for (let j = 0; j < data[i].length; j++){
      let ini = {}
      ini["huruf"] = data[i][j]
      ini["posisi"] = [i, j]
      hasil.push(ini)
    }
  }
  return hasil
}

//"MESS"
console.log(objektify(dummyData));
