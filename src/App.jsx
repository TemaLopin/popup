import { useEffect, useState } from 'react'
import { Checkbox, Modal } from './components'
import { Game, Lose, Win } from './steps'

import './fonts/style.css'
import './index.css'

const STEPS = { GAME: 0, WIN: 1, LOSE: 2 }

function App() {
  const [showButton, setShowButton] = useState(false)
  const [isOpenModal, setIsOpenModal] = useState(true)

  const [step, setStep] = useState({ step: STEPS.GAME, isWin: false, isSkip: false })

  const onCloseModal = () => setIsOpenModal(false)

  const onResultGame = ({ isWin, isSkip }) => {
    if (isWin) return setStep({ step: STEPS.WIN, isWin, isSkip })
    return setStep({ step: STEPS.LOSE, isWin, isSkip })
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
        {step.step === STEPS.GAME && <Game onResult={onResultGame} showButton={showButton} />}
        {step.step === STEPS.WIN && <Win onSendUserData={onSendUserData} result={step} />}
        {step.step === STEPS.LOSE && <Lose />}
      </Modal>
    </>
  )
}

export default App
