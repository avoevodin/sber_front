import { useEffect } from 'react'
import ReactDOM from 'react-dom'
import styles from './modal.module.css'

function Modal({ children, onClose, state = false }) {
  if (!state) return null

  useEffect(() => {
    window.document.addEventListener('keydown', (e) => {
      if (e.code === 'Escape') {
        onClose()
      }
    })
  })

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
