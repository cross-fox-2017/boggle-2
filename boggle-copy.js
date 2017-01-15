let arr = ['AB','GH'];

let board = [['A','B','C','D'],
						 ['E','F','G','H'],
						 ['I','J','K','L'],
						 ['M','N','O','P']]

// let search = board[1].indexOf(arr[1][0]);
let grid = [];

for(let i = 0; i < board.length; i++){
	let arr = []
	grid.push(arr);
	for(let j = 0; j < board[i].length; j++){
		grid[i].push(i,j)
	}
}

console.log(grid)



let arr = []
    let tam = []
    for(let i = 0; i < this.words.length; i++){
      let arr2 = []
      arr.push(arr2);
      let x = 0
      for(let j = 0; j < this.words[i].length; j++){
        for(let k = 0; k < this.boggleBoard.length; k++){
          for(let l = 0; l < this.boggleBoard[k].length; l++){
            let arr3 = []
            tam.push(arr3)
            if(this.boggleBoard[k][l] === this.words[i][j]){
              x++
              tam[i].push(this.boggleBoard[k][l],k,l)
              if(x === this.words[i].length){
                for(let m = 0; m < tam.length; m++){
                  arr[i].push({
                    huruf: tam[m],
                    x: tam[m],
                    y: tam[m]
                  })
                }
              }
            }
          }
        }
      }
    }


    searchWord() {
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
              } else {
                return "Word Not Found!"
              }
            }
          }
        }
      }
    }
    return console.log(arr)
  }

  // wordPosition() {
  //   let arr = []
  //   for(let i = 0; i < this.searchWord().length; i++){
  //     for(let j = 0; j < this.words[this.searchWord()[i]].length; j++){
  //       for(let k = 0; k < this.boggleBoard.length; k++){
  //         for(let l = 0; l < this.boggleBoard[k].length; l++){
  //           if(this.boggleBoard[k][l] === this.words[this.searchWord()[i]][j]){
  //             arr.push({
  //               huruf: this.boggleBoard[k][l],
  //               x: k,
  //               y: l
  //             })
  //           }
  //         }
  //       }
  //     }
  //   }
  //   return console.log(arr);
  // }  