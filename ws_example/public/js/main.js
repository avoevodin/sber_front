const $signUp = document.querySelector('[data-signup]')
const $name = document.querySelector('[data-name]')
const $signUpWr = document.querySelector('[data-signupwr]')
const $send = document.querySelector('[data-send]')
const $textInput = document.querySelector('[data-text')
const $avatar = document.querySelector('[data-avatar]')
const $messages = document.querySelector('[data-messages]')

function generateMessageTemplate(message) {
  return `
        <div class="messageWr">
        <img src="${message.avatar}" alt="avatar" class="avatar">
        <div class="dataWr">
            <div class="messageInfo">
                <span class="messageAuthorName">${message.name}</span>
                <span class="messageDate">${message.date}</span>
            </div>
            <p class="messageText">
                 ${message.text}
            </p>
        </div>
        </div>
    `
}

function generateConnectionMessage(message) {
  return `
    <p class="connect">Welcome, ${message.name}!</p>
    `
}

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
      case 'SignUp': {
        const messageTemplate = generateConnectionMessage(parsedMessage)
        $messages.insertAdjacentHTML('beforeend', messageTemplate)
        break
      }

      case 'Text': {
        const messageTemplate = generateMessageTemplate(parsedMessage)
        $messages.insertAdjacentHTML('beforeend', messageTemplate)
        break
      }
      default: {
        break
      }
    }
  }

  $send.addEventListener('click', (e) => {
    socket.send(JSON.stringify({
      type: 'Text',
      personId: person.id,
      text: $textInput.value,
    }))
  })
})
