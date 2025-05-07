import { useState } from 'react'
import { Button, Input, Checkbox } from '../components'

export const Win = ({ onSendUserData, result }) => {
  const [user, setUser] = useState({ email: '', date: '', success: false })

  const onChangeUser = (key, value) => {
    setUser((prev) => ({ ...prev, [key]: value }))
  }

  const handleClick = () => onSendUserData(user)

  const getButtonDisables = () => {
    const hasDate = user?.date.trim().length > 0
    const hasEmail = user?.email.trim().length > 0
    const isSuccess = user?.success

    const isValidEmail = user?.email.includes('@')
    const isValidDate = user?.date.length === 10

    const isValid = hasDate && hasEmail && isSuccess && isValidEmail && isValidDate

    return !isValid
  }
  const isButtonDisabled = getButtonDisables()

  const isSkip = result?.isSkip

  return (
    <div className='congratulation'>
      {!isSkip && <p className='modal-title'>Поздравляем!</p>}
      {!isSkip ? (
        <p className='modal-description'>
          Вы нашли промокод: оставьте свою почту — отправим письмо со скидкой на подборку напитков
        </p>
      ) : (
        <p className='modal-description-skip'>Оставьте свою почту — отправим письмо со скидкой на подборку напитков</p>
      )}
      <div className='form'>
        <div className='form-inputs'>
          <Input placeholder={'Email'} value={user?.email} onChange={(value) => onChangeUser('email', value)} />
          <Input
            type={'date'}
            placeholder={'Дата рождения'}
            value={user?.date}
            onChange={(value) => onChangeUser('date', value)}
          />
        </div>
        <Button disabled={isButtonDisabled} style={{ marginBottom: '10px' }} onClick={handleClick}>
          Отправить
        </Button>
        <Checkbox checked={user?.success} onChange={(value) => onChangeUser('success', value)}>
          Согласен с политикой обработки персональных <br /> данных и получением рекламных рассылок.
        </Checkbox>
      </div>
    </div>
  )
}
