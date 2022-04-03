import {
  createContext, useContext, useEffect,
} from 'react'
import { useDispatch } from 'react-redux'
import { setPhonesQuery } from '../../redux/actionCreators/phonesActionCreators'
import CreatePhoneForm from './CreatePhoneForm/CreatePhoneForm'
import PhonesList from './PhonesList/PhonesList'
// import SearchPhoneForm from './SearchPhoneForm/SearchPhoneForm'

const PhonesContext = createContext()

const Phones = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setPhonesQuery())
  }, [])

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <>
      <CreatePhoneForm />
      <hr className="mb-4" />
      {/* <SearchPhoneForm /> */}
      <PhonesList />
    </>
  )
}

const usePhonesContext = () => useContext(PhonesContext)
export default Phones
export {
  PhonesContext,
  usePhonesContext,
}
