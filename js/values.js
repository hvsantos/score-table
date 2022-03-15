const score_list = []
const winInput = document.querySelector('#winMult')
const drawInput = document.querySelector('#drawMult')
const defeatInput = document.querySelector('#defeatMult')

let win_value = 0
let draw_value = 0
let defeat_value = 0

winInput.addEventListener('input', refreshValueWin)
drawInput.addEventListener('input', refreshValueDraw)
defeatInput.addEventListener('input', refreshValueDefeat)

function refreshValueWin() {
  win_value = document.querySelector('#winMult').value
  if (win_value == '') {
    win_value = 0
  }
  document.querySelector('#refresh-button').removeAttribute('hidden')
}

function refreshValueDraw() {
  draw_value = drawInput.value
  if (draw_value == '') {
    draw_value = 0
  }
  document.querySelector('#refresh-button').removeAttribute('hidden')
}

function refreshValueDefeat() {
  defeat_value = defeatInput.value
  if (defeat_value == '') {
    defeat_value = 0
  }
  document.querySelector('#refresh-button').removeAttribute('hidden')
}
