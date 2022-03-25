import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const phonesItemVariants = {
  start: {
    scaleY: 0,
    opacity: 0,
    zIndex: -1,
  },
  end: {
    scaleY: 1,
    opacity: 1,
    zIndex: 1,
  },
}

const PhonesItem = ({ name, phone, id }) => (
  <motion.div variants={phonesItemVariants}>
    <Link className="list-group-item list-group-item-action" to={`/phones/${id}`}>
      <span className="pe-4">
        {name}
      </span>
      <span>

        {phone}
      </span>
    </Link>
  </motion.div>
)

export default PhonesItem
