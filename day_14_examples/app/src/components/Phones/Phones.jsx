import {
  createContext, useContext, useEffect, useState,
} from 'react'
import CreatePhoneForm from './CreatePhoneForm/CreatePhoneForm'
import PhonesList from './PhonesList/PhonesList'

const PhonesContext = createContext()

const Phones = () => {
  const [phones, setPhones] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/phones/')
      .then((response) => response.json())
      .then((dataFromServer) => setPhones(dataFromServer))
  }, [])

  const addPhone = (newPhone) => {
    setPhones((prev) => [...prev, newPhone])
  }

  const deletePhone = (id) => {
    fetch(`http://localhost:3000/api/v1/phones/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.status === 200) {
          setPhones((prev) => prev.filter((phone) => phone.id !== id))
        }
      })
  }

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <PhonesContext.Provider value={{ phones, addPhone, deletePhone }}>
      <CreatePhoneForm />
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
