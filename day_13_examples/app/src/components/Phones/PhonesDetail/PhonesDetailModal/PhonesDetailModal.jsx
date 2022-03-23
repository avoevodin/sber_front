import { useState } from 'react'
import Modal from '../../../Modal/Modal'

function PhonesDetailModal() {
  const [viewModal, setViewModal] = useState(false)

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
