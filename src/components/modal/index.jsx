import { createPortal } from 'react-dom'
import { CrossIcon } from '../../assets/cross'
import './style.css'

export const Modal = ({ open, onClose, children }) => {
  const getContainerClassName = (open) => {
    if (open) return 'modal-container modal-open'
    return 'modal-container'
  }

  const containerClassName = getContainerClassName(open)

  if (!open) return <></>

  const body = (
    <div className='modal-wrapper'>
      <div className={containerClassName}>
        <div className='modal-body'>
          <CrossIcon className={'modal-cross'} onClick={onClose} />
          {children}
        </div>
      </div>
    </div>
  )
  return createPortal(body, document.getElementById('root'))
}
