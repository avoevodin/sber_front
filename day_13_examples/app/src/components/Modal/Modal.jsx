/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import ReactDOM from 'react-dom'
import { useEffect } from 'react'
import styles from './modal.module.css'

function Modal({ children, state, ...rest }) {
  return ReactDOM.createPortal(
    state
    && (
    <ModalInner {...rest}>
      {children}
    </ModalInner>
    ),
    document.getElementById('modal-root'),
  )
}

const ModalInner = ({ children, onClose }) => {
  const escHandler = (e) => {
    if (e.code === 'Escape') {
      onClose()
    }
  }

  useEffect(() => {
    window.document.addEventListener('keydown', escHandler)
    return () => window.document.removeEventListener('keydown', escHandler)
  }, [])

  const closeClickHandler = () => {
    onClose()
  }

  const innerClickHandler = (e) => {
    e.stopPropagation()
  }

  return (
    <div onClick={closeClickHandler} className={styles.wrapper}>
      <div onClick={innerClickHandler} className={styles.inner}>
        <svg onClick={closeClickHandler} role="button" className={`bi bi-x ${styles.icon}`} xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" viewBox="0 0 16 16">
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
        {children}
      </div>
    </div>
  )
}

export default Modal
