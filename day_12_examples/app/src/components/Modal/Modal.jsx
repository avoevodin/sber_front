import ReactDOM from 'react-dom'
import styles from './modal.module.css'

function Modal({ children }) {
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
