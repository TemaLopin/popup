import { useState } from 'react'
import { Modal } from './components'
import { Game, Lose, Win } from './steps'

import './fonts/style.css'
import './index.css'

const STEPS = { GAME: 0, WIN: 1, LOSE: 2 }

function App() {
  const [isOpenModal, setIsOpenModal] = useState(true)
  const [step, setStep] = useState(STEPS.GAME)

  const onCloseModal = () => setIsOpenModal(false)

  const onResultGame = ({ isWin }) => {
    if (isWin) return setStep(STEPS.WIN)
    return setStep(STEPS.LOSE)
  }

  const onSendUserData = ({ email, date }) => {
    console.log(email, date)
    onCloseModal()
  }

  return (
    <Modal open={isOpenModal} onClose={onCloseModal}>
      {step === STEPS.GAME && <Game onResult={onResultGame} />}
      {step === STEPS.WIN && <Win onSendUserData={onSendUserData} />}
      {step === STEPS.LOSE && <Lose />}
    </Modal>
  )
}

export default App
