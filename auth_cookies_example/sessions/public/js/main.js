const $signUpForm = document.forms.signUpForm
const LSKey = 'signUpForm'

function writeDataToLS(event) {
  const oldData = JSON.parse(window.localStorage.getItem(LSKey))
  const objectToSave = JSON.stringify({
    ...oldData,
    [event.target.name]: event.target.value,
  })

  window.localStorage.setItem(LSKey, objectToSave)
}

if ($signUpForm) {
  const $emailInput = $signUpForm.elements.email
  const $nameInput = $signUpForm.elements.name

  const LSData = JSON.parse(window.localStorage.getItem(LSKey))
  if (LSData) {
    $emailInput.value = LSData.email
    $nameInput.value = LSData.name
  }

  $emailInput.addEventListener('input', writeDataToLS)
  $nameInput.addEventListener('input', writeDataToLS)
}
