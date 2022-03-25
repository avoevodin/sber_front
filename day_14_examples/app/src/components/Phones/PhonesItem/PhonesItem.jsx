import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
// import { Link } from 'react-router-dom'

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

const PhonesItem = ({ name, phone, id }) => {
  const navigate = useNavigate()

  const mouseUpHandler = () => {
    navigate(`/phones/${id}`)
  }

  const dragEndHandler = (e, info) => {
    console.log(e, info)
  }

  const dragStartHandler = (e, info) => {
    console.log(e, info)
  }

  return (
    <motion.div
      className="list-group-item list-group-item-action"
      drag="x"
      dragConstraints={{
        top: 0, left: 0, bottom: 0, right: 0,
      }}
      variants={phonesItemVariants}
      onMouseUp={mouseUpHandler}
      onDragEnd={dragEndHandler}
      onDragStart={dragStartHandler}
    >
      {/* <Link className="list-group-item list-group-item-action" to={`/phones/${id}`}> */}
      <span className="pe-4">
        {name}
      </span>
      <span>

        {phone}
      </span>
      {/* </Link> */}
    </motion.div>
  )
}

export default PhonesItem
