import styles from './Loader.module.css'

const Loader = () => (
  // https://loading.io/css/
  <div className={styles['lds-ripple']}>
    <div />
    <div />
  </div>
)

export default Loader
