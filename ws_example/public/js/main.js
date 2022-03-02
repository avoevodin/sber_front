const $signUp = document.querySelector('[data-signup]')
const $name = document.querySelector('[data-name]')
const $signUpWr = document.querySelector('[data-signupwr]')
const $send = document.querySelector('[data-send]')
const $textInput = document.querySelector('[data-text')
const $avatar = document.querySelector('[data-avatar]')

$signUp.addEventListener('click', (e) => {
  const person = {
    id: Date.now(),
    avatar: $avatar.value,
    name: $name.value,
  }

  $signUpWr.remove()

  const socket = new WebSocket(window.location.origin.replace('http', 'ws'))

  socket.onopen = function (e) {
    socket.send(JSON.stringify({
      type: 'SignUp',
      ...person,
    }))
  }
  socket.onmessage = function (e) {
    const parsedMessage = JSON.parse(e.data)

    switch (parsedMessage.type) {
      case 'SignUp':
        console.log('SignUp', parsedMessage)
        break

      case 'Text':
        console.log('Text', parsedMessage)
        break

      default:
        break
    }
  }

  $send.addEventListener('click', (e) => {
    socket.send(JSON.stringify({
      type: 'Text',
      name: person.name,
      date: Date.now(),
      text: $textInput.value,
    }))
  })
})
