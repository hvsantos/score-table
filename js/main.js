function generateTable() {
  document.querySelector('#player-rows').innerHTML = ''
  for (i = 0; i < score_list.length; i++) {
    let points =
      score_list[i].win * win_value +
      score_list[i].draw * draw_value +
      score_list[i].defeat * defeat_value

    document.querySelector('#player-rows').innerHTML += `<tr>
      <td>${score_list[i].player}</td>
      <td>${score_list[i].win}</td>
      <td>${score_list[i].draw}</td>
      <td>${score_list[i].defeat}</td>
      <td>${points}</td>
      <td><button class="main-button -prow" onClick="addWin(${i})">Vitória</button></td>
      <td><button class="main-button -prow" onClick="addDraw(${i})">Empate</button></td>
      <td><button class="main-button -prow" onClick="addDefeat(${i})">Derrota</button></td>
      </tr>`
    points = 0
  }
  checkWinDefeat()
  // checkDraw()
}

function addWin(index) {
  score_list[index].win += 1
  generateTable()
}
function addDraw(index) {
  score_list[index].draw += 1
  generateTable()
}
function addDefeat(index) {
  score_list[index].defeat += 1
  generateTable()
}
