import { createContext, useEffect, useState } from 'react'

const PhoneContext = createContext()

function Phones({ children }) {
  const [phones, setPhones] = useState([])

  useEffect(() => {
    fetch('localhost:3001/api/v1/phones/')
      .then((response) => response.json())
      .then((dataFromServer) => setPhones(dataFromServer))
  }, [])

  return (
    <PhoneContext.PhoneContextProvider value={{ phones }}>
      {children}
    </PhoneContext.PhoneContextProvider>
  )
}

export default Phones
export {
  PhoneContext,
}
