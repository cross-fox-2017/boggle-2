function solver(){
  var num = 4
	var arr = [];
	let dimensi = num*num;

	for (var idx='A'.charCodeAt(0), end='Z'.charCodeAt(0); idx<=end; ++idx){
		arr.push(String.fromCharCode(idx))
	}
	let boggle = [];

	for(let i=0; i<dimensi; i++){
		boggle.push(arr[Math.floor(Math.random() * arr.length)])
	}

	var letter_grid = [];
	var i, j, chunk = num;

	for(i=0, j=boggle.length; i<j; i+=chunk){
		letter_grid.push(boggle.slice(i, i+chunk));
	}
  console.log(letter_grid);
  var gabung = letter_grid.join('');
  kata = ['AKU'];
  if(gabung.match(/[AKU]/g)==true){
    return console.log(`terdapat kata "${kata}" pada grid ini`);
  }
  else {
    return console.log(`tidak terdapat kata "${kata}" pada grid ini`);
  }
}

solver();
