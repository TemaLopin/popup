import { useState } from 'react'
import { CheckIcon } from '../../assets/check'
import './style.css'

export const Checkbox = ({ children, onChange, ...props }) => {
  const [checked, setChecked] = useState(false)

  const handleClick = () => {
    setChecked(!checked)
    if (onChange) onChange(!checked)
  }

  return (
    <div onClick={handleClick} className='checkbox-container'>
      <div className='checkbox'>{checked ? <CheckIcon /> : <></>}</div>
      <p className='checkbox-label'>{children}</p>
    </div>
  )
}
