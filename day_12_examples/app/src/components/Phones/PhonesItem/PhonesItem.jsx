import { Link } from 'react-router-dom'

function PhonesItem({ name, phone, id }) {
  return (
    <li>
      <Link to={`/phones/${id}`}>
        {name}
        {' '}
        {phone}
      </Link>
    </li>
  )
}

export default PhonesItem
