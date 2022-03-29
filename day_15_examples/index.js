const buttonsWr = document.querySelector('[data-buttons]')

buttonsWr.addEventListener('click', (e) => {
  console.log(e.target.dataset)
})
