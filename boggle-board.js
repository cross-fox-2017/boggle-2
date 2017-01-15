"use strict"

export class BoogleBoard{
  constructor(panjang, lebar){
    this.panjang = panjang;
    this.lebar = lebar
    this.board = []
  }
  shake(){
    for (let i = 0; i < this.panjang; i++) {
      this.board[i] = []
      for (let j = 0; j < this.lebar; j++){
        this.board[i].push(this.randomer())
      }
    }
    return this.board
  }
  randomer(){
    return String.fromCharCode(Math.random()*(90-65)+65)
  }
}
