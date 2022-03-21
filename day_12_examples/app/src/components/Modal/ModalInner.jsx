import { useEffect } from 'react'
import styles from './modal.module.css'

function ModalInner({ children, onClose }) {
  const escHandler = (e) => {
    if (e.code === 'Escape') {
      onClose()
    }
  }

  useEffect(() => {
    window.document.addEventListener('keydown', escHandler)
    return () => window.document.removeEventListener('keydown', escHandler)
  }, [])

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        {children}
      </div>
    </div>
  )
}

export default ModalInner
