import Modal from '../../../Modal/Modal'
import Form from '../../Form/Form'
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
      <Form
        onSubmit={submitHandler}
        {...phone}
      />
    </Modal>
  )
}

export default PhonesDetailModal
