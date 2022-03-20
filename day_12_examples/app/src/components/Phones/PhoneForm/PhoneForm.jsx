import { useEffect, useRef } from 'react'

function PhoneForm({
  onSubmit, name = '', phone = '', pic = '',
}) {
  const formRef = useRef(null)
  useEffect(() => {
    formRef.current.elements.name.value = name
    formRef.current.elements.phone.value = phone
    formRef.current.elements.pic.value = pic
  }, [])
  return (
    <form ref={formRef} className="d-flex flex-column align-items-center" onSubmit={onSubmit}>
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

export default PhoneForm
