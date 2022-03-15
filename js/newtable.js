const button_newtable = document.querySelector('#button-newtable')
button_newtable.addEventListener('click', newTable)
const button_refresh = document.querySelector('#button-refresh')
button_newtable.addEventListener('click', refreshTable)
function newTable() {
  let error_msg = document.querySelector('#error-msg')
  error_msg.innerHTML = ''
  let table_title = document.querySelector('#input-title')
  if (table_title.value != '') {
    button_newtable.setAttribute('hidden', '')
    table_title.setAttribute('hidden', '')
    document.querySelector('#title-table').innerHTML = `${table_title.value}`
    document.querySelector('#main-subtitle').setAttribute('hidden', '')
    let arrayMenu = document.querySelectorAll('.new-table')
    for (let i = 0; i < arrayMenu.length; i++) {
      arrayMenu[i].removeAttribute('hidden')
    }
    document.querySelector('#new-player').removeAttribute('hidden')
  } else {
    error_msg.innerHTML = 'Favor Inserir um Titulo'
  }
}

function refreshTable() {}
