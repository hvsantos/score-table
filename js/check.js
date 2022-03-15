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
// function checkDraw() {
//   let sumDraw = 0
//   let quantDraw = 0
//   for (i = 0; i < score_list.length; i++) {
//     sumDraw += score_list[i]

//   }
//   if (sumVal != 0) {
//     document.querySelector('#error-msg').innerHTML =
//       'A quantidade de Vitorias não condiz com a Quantidade de Derrotas'
//   }
// }
