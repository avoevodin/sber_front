const socket = new WebSocket(window.location.origin.replace('http', 'ws'))
const $signUp = document.querySelector('[data-signup]')
const $name = document.querySelector('[data-name]')
const $signUpWr = document.querySelector('[data-signupwr]')

$signUp.addEventListener('click', (e) => {
  const person = {
    id: Date.now(),
    name: $name.value,
  }

  $signUpWr.remove()
})
