import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { usePhonesContext } from '../Phones'
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
  const { deletePhone } = usePhonesContext()
  const navigate = useNavigate()

  let isDrag = false
  const deleteTrashhold = 100

  const followX = useMotionValue()
  const xInput = [-deleteTrashhold, 0, deleteTrashhold]
  const background = useTransform(followX, xInput, [
    'linear-gradient(180deg, #FF0000 0%, #FF0000 100%)',
    'linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 100%)',
    'linear-gradient(180deg, #FF0000 0%, #FF0000 100%)',
  ])

  const clickHandler = () => {
    if (!isDrag) navigate(`/phones/${id}`)
  }

  const dragStartHandler = () => {
    isDrag = true
  }

  const dragEndHandler = () => {
    if (Math.abs(followX.get()) > deleteTrashhold) {
      deletePhone(id)
    }
    setTimeout(() => {
      isDrag = false
    })
  }

  return (
    <motion.div
      className="list-group-item list-group-item-action"
      drag="x"
      style={{ x: followX, background }}
      dragConstraints={{
        top: 0, left: 0, bottom: 0, right: 0,
      }}
      variants={phonesItemVariants}
      onClick={clickHandler}
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
