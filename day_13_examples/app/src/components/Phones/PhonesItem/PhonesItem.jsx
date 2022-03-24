import { Link } from 'react-router-dom'

const PhonesItem = ({ name, phone, id }) => (
  <Link className="list-group-item list-group-item-action" to={`/phones/${id}`}>
    <span className="pe-4">
      {name}
    </span>
    <span>

      {phone}
    </span>
  </Link>
)

export default PhonesItem
