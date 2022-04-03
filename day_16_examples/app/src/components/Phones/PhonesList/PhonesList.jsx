import { AnimatePresence, motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import PhonesItem from '../PhonesItem/PhonesItem'

const phonesListVariants = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const PhonesList = () => {
  const phones = useSelector((store) => store.phones)
  return (
    <div className="d-flex justify-content-center">
      {
        phones.length ? (
          <motion.div variants={phonesListVariants} initial="start" animate="end" className="list-group">
            <AnimatePresence>
              {phones.map((phone) => (
                <PhonesItem key={phone.id} {...phone} />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : null
      }
    </div>
  )
}

export default PhonesList
