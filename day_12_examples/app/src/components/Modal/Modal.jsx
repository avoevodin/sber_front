import ReactDOM from 'react-dom'
import ModalInner from './ModalInner'

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

export default Modal
