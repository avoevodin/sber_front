import Modal from '../../../Modal/Modal'
import PhoneForm from '../../PhoneForm/PhoneForm'
import { usePhonesDetailContext } from '../PhonesDetail'

const PhonesDetailModal = () => {
  const {
    viewModal, closeModal, submitHandler, phone,
  } = usePhonesDetailContext()
  return (
    <Modal
      state={viewModal}
      onClose={closeModal}
    >
      <PhoneForm
        onSubmit={submitHandler}
        name={phone.name}
        phone={phone.phone}
        pic={phone.pic}
      />
    </Modal>
  )
}

export default PhonesDetailModal
