import styles from './Loader.module.css'

function Loader() {
  return (
  // https://loading.io/css/
    <div className={styles['lds-ripple']}>
      <div />
      <div />
    </div>
  )
}

export default Loader
