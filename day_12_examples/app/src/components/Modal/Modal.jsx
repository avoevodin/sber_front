import { useEffect } from 'react'
import ReactDOM from 'react-dom'
import styles from './modal.module.css'

function Modal({ children, onClose, state = false }) {
  if (!state) return null

  const escHandler = (e) => {
    if (e.code === 'Escape') {
      onClose()
    }
  }

  useEffect(() => {
    window.document.addEventListener('keydown', escHandler)
    return () => window.document.removeEventListener('keydown', escHandler)
  }, [])

  return ReactDOM.createPortal(
    (
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          {children}
        </div>
      </div>
    ),
    document.getElementById('modal-root'),
  )
}

export default Modal
