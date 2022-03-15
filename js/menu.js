const button_start = document.querySelector('#button-start')
button_start.addEventListener('click', startMenu)
function startMenu(event) {
  event.preventDefault()
  let arrayMenu = document.querySelectorAll('.start-hidden')
  for (let i = 0; i < arrayMenu.length; i++) {
    arrayMenu[i].removeAttribute('hidden')
  }
  document.querySelector('#label-start').setAttribute('hidden', '')
  document.querySelector('#button-start').setAttribute('hidden', '')
}
