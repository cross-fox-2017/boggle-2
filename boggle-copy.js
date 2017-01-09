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