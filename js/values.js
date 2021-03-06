const score_list = []

function resetFunction() {
  let count = score_list.length
  for (let i = 0; i < count; i++) {
    score_list.pop()
  }
  generateTable()
}

const winInput = document.querySelector('#winMult')
const drawInput = document.querySelector('#drawMult')
const defeatInput = document.querySelector('#defeatMult')

let win_value = 1
let draw_value = 0.5
let defeat_value = -1

winInput.addEventListener('input', refreshValueWin)
drawInput.addEventListener('input', refreshValueDraw)
defeatInput.addEventListener('input', refreshValueDefeat)

function refreshValueWin() {
  win_value = document.querySelector('#winMult').value
  if (win_value == '') {
    win_value = 0
  }
  generateTable()
  document.querySelector('#button-refresh').removeAttribute('hidden')
}

function refreshValueDraw() {
  draw_value = drawInput.value
  if (draw_value == '') {
    draw_value = 0
  }
  generateTable()
  document.querySelector('#button-refresh').removeAttribute('hidden')
}

function refreshValueDefeat() {
  defeat_value = defeatInput.value
  if (defeat_value == '') {
    defeat_value = 0
  }
  generateTable()
  document.querySelector('#button-refresh').removeAttribute('hidden')
}
