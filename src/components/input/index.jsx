import './style.css'

const regExpNumber = /^[0-9.]+$/

export const Input = ({ type, onChange, ...props }) => {
  const onChangeInput = ({ target: { value } }) => {
    if (type !== 'date') return onChange(value)

    if (value.length > 10) return
    if (!regExpNumber.test(value)) return
    if (value.length === 2) return onChange(`${value}.`)
    if (value.length === 5) return onChange(`${value}.`)
    return onChange(value)
  }

  return <input {...props} onChange={onChangeInput} className='input' />
}
