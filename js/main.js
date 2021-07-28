const tabItens = document.querySelectorAll('.tab-item')
const tabContentItens = document.querySelectorAll('.tab-content-item')

// Select tab content item
function selectItem(e) {
  removeBorder()
  removeShow()
  //add border to current tab
  this.classList.add('tab-border')
  //grab content item from the Dom
  const tabContentItem = document.querySelector(`#${this.id}-content`)
  //add the show class
  tabContentItem.classList.add('show')
}

function removeBorder() {
  tabItens.forEach(item => item.classList.remove('tab-border'))
}

function removeShow() {
  tabContentItens.forEach(item => item.classList.remove('show'))
}

//Listen for tab click
tabItens.forEach(item => item.addEventListener('click', selectItem))
