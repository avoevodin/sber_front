import styles from './modal.module.css'

function Modal({ children }) {
  return (
    <div className={styles.global_wrapper}>
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
