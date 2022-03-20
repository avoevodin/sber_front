import {
  createContext, useEffect, useMemo, useState,
} from 'react'
import PhonesList from './PhonesList/PhonesList'

const PhonesContext = createContext()

function Phones() {
  const [phones, setPhones] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/phones/')
      .then((response) => response.json())
      .then((dataFromServer) => setPhones(dataFromServer))
  }, [])

  const shareState = useMemo(() => ({ phones }), [phones])

  return (
    <PhonesContext.Provider value={shareState}>
      <PhonesList />
    </PhonesContext.Provider>
  )
}

export default Phones
export {
  PhonesContext,
}
