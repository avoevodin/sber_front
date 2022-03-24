import {
  createContext,
  useContext,
  useMemo,
} from 'react'
import usePhonesDetail from './hooks/usePhonesDetail'
import usePhonesDetailModal from './hooks/usePhonesDetailModal'
import PhonesDetailCard from './PhonesDetailCard/PhonesDetailCard'
import PhonesDetailModal from './PhonesDetailModal/PhonesDetailModal'

const PhonesDetailContext = createContext()

function PhonesDetail() {
  const { viewModal, openModal, closeModal } = usePhonesDetailModal()
  const { phone, submitHandler } = usePhonesDetail(closeModal)

  const sharedValues = useMemo(() => ({
    viewModal, openModal, closeModal, phone, submitHandler,
  }), [phone])
  return (
    <PhonesDetailContext.Provider value={sharedValues}>
      <div className="d-flex justify-content-center">
        <PhonesDetailCard />
        <PhonesDetailModal />
      </div>
    </PhonesDetailContext.Provider>
  )
}

export default PhonesDetail

export const usePhonesDetailContext = () => useContext(PhonesDetailContext)
