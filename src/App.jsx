import { useEffect, useState } from 'react'
import { Checkbox, Modal } from './components'
import { Game, Lose, Win } from './steps'

import './fonts/style.css'
import './index.css'

const STEPS = { GAME: 0, WIN: 1, LOSE: 2 }

function App() {
  const [showButton, setShowButton] = useState(false)
  const [isOpenModal, setIsOpenModal] = useState(true)
  const [step, setStep] = useState(STEPS.GAME)

  const onCloseModal = () => setIsOpenModal(false)

  const onResultGame = ({ isWin }) => {
    if (isWin) return setStep(STEPS.WIN)
    return setStep(STEPS.LOSE)
  }

  const onSendUserData = ({ email, date }) => {
    console.log(email, date)

    // mindbox('async', {
    //   operation: 'ClickButton',
    //   data: {
    //     customer: {
    //       ids: {
    //         date,
    //         email,
    //       },
    //     },
    //     customFields: {
    //       buttonClick: 'true',
    //     },
    //   },
    // })

    onCloseModal()
  }

  return (
    <>
      <Modal open={isOpenModal} onClose={onCloseModal}>
        <Checkbox onChange={() => setShowButton((prev) => !prev)}>Показывать кнопку</Checkbox>
        {step === STEPS.GAME && <Game onResult={onResultGame} showButton={showButton} />}
        {step === STEPS.WIN && <Win onSendUserData={onSendUserData} />}
        {step === STEPS.LOSE && <Lose />}
      </Modal>
    </>
  )
}

export default App
