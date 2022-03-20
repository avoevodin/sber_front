import { useContext } from 'react'
import { PhonesContext } from '../Phones'
import PhonesItem from '../PhonesItem/PhonesItem'

function PhonesList() {
  const { phones } = useContext(PhonesContext)
  return (
    <div className="d-flex justify-content-center">
      <div className="list-group">
        {phones.map((phone) => (
          <PhonesItem key={phone.id} {...phone} />
        ))}
      </div>
    </div>
  )
}

export default PhonesList
