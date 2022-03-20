import { usePhonesContext } from '../Phones'

function CreatePhoneForm() {
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
    <form className="d-flex flex-column align-items-center" onSubmit={submitHandler}>
      <div className="mb-3">
        <input name="name" placeholder="name" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <input name="phone" placeholder="phone" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <input name="pic" placeholder="image link" type="text" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default CreatePhoneForm
