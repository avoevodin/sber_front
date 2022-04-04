import { useDispatch } from 'react-redux'
import Form from '../Form/Form'
import { addPhoneQuery } from '../../../redux/actionCreators/phonesActionCreators'

const PhoneForm = () => {
  const dispatch = useDispatch()
  const submitHandler = (e) => {
    e.preventDefault()
    const formData = Object.fromEntries(new FormData(e.target).entries())
    dispatch(addPhoneQuery(formData, e))
  }
  return (
    <Form
      onSubmit={submitHandler}
    />
  )
}

export default PhoneForm
