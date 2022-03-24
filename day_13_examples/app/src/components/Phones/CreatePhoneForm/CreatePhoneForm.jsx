import PhoneForm from '../PhoneForm/PhoneForm'
import { usePhonesContext } from '../Phones'

const CreatePhoneForm = () => {
  const { addPhone } = usePhonesContext()

  const submitHandler = async (e) => {
    e.preventDefault()
    const formData = Object.fromEntries(new FormData(e.target).entries())
    const res = await fetch('http://localhost:3000/api/v1/phones/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (res.status === 201) {
      const phoneFromServer = await res.json()
      addPhone(phoneFromServer)
      e.target.reset()
    } else {
      // eslint-disable-next-line no-alert
      alert('Wrong data')
    }
  }

  return (
    <PhoneForm onSubmit={submitHandler} />
  )
}

export default CreatePhoneForm
