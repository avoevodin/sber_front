import { useContext } from 'react'
import { PhonesContext } from '../Phones'
import PhonesItem from '../PhonesItem/PhonesItem'

function PhonesList() {
  const { phones } = useContext(PhonesContext)
  return (
    <ul>
      {phones.map((phone) => (
        <PhonesItem key={phone.id} {...phone} />
      ))}
    </ul>
  )
}

export default PhonesList
