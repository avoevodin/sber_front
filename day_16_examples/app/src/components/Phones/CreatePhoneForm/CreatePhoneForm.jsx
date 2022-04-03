import { useDispatch } from 'react-redux'
import { addPhoneQuery } from '../../../redux/actionCreators/phonesActionCreators'
import PhoneForm from '../PhoneForm/PhoneForm'

const CreatePhoneForm = () => {
  const dispatch = useDispatch()
  const submitHandler = (e) => {
    e.preventDefault()
    const formData = Object.fromEntries(new FormData(e.target).entries())
    dispatch(addPhoneQuery(formData, e))
  }

  return (
    <PhoneForm onSubmit={submitHandler} />
  )
}

export default CreatePhoneForm
