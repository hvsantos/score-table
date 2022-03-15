const button_newp = document.querySelector('#new-player')
button_newp.addEventListener('click', newPlayer)
function newPlayer(event) {
  event.preventDefault()
  let arrayMenu = document.querySelectorAll('.addplayer')
  for (let i = 0; i < arrayMenu.length; i++) {
    arrayMenu[i].removeAttribute('hidden')
  }
  button_newp.setAttribute('hidden', '')
  document.querySelector('#button-reset').setAttribute('hidden', '')
}

const input_new = document.querySelector('#input-new')
const button_pushnew = document.querySelector('#button-new')
button_pushnew.addEventListener('click', submitNewPlayer)
function submitNewPlayer(event) {
  event.preventDefault()
  document.querySelector('#button-reset').removeAttribute('hidden')
  inputname = input_new.value
  score_list.push({
    player: `${inputname}`,
    win: 0,
    draw: 0,
    defeat: 0
  })
  button_pushnew.setAttribute('hidden', '')
  input_new.setAttribute('hidden', '')
  button_newp.removeAttribute('hidden')
  generateTable()
}
