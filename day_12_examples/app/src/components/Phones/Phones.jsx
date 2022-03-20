import {
  createContext, useContext, useEffect, useState,
} from 'react'
import PhoneForm from './PhoneForm/PhoneForm'
import PhonesList from './PhonesList/PhonesList'

const PhonesContext = createContext()

function Phones() {
  const [phones, setPhones] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/phones/')
      .then((response) => response.json())
      .then((dataFromServer) => setPhones(dataFromServer))
  }, [])

  const addPhone = (newPhone) => {
    setPhones((prev) => [...prev, newPhone])
  }

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <PhonesContext.Provider value={{ phones, addPhone }}>
      <PhoneForm />
      <hr className="mb-4" />
      <PhonesList />
    </PhonesContext.Provider>
  )
}

const usePhonesContext = () => useContext(PhonesContext)
export default Phones
export {
  PhonesContext,
  usePhonesContext,
}
