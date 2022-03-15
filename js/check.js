function checkWinDefeat() {
  let sumVal = 0
  document.querySelector('#error-msg').innerHTML = ''
  for (i = 0; i < score_list.length; i++) {
    sumVal += score_list[i].win
    sumVal -= score_list[i].defeat
  }
  if (sumVal != 0) {
    document.querySelector('#error-msg').innerHTML =
      'A quantidade de Vitorias não condiz com a Quantidade de Derrotas'
  }
}
function checkDraw() {
  let check = 0
  for (let i = 0; i < score_list.length; i++) {
    let draw = score_list[i].draw
    if (draw > check) {
      check = score_list[i].draw
    }
  }
  for (let n = 0; n < score_list.length; n++) {
    score_list[n].draw = check
  }
  generateTable()
}
