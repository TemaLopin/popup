import { Card } from '../components'
import { useMemo, useState } from 'react'

const variants = new Array(6).fill(false).map((_, i) => ({
  id: i,
  discount: i % 2 === 0 ? 10 : 0,
}))

const getShuffleArray = (arr) => {
  let newArr = [...arr]
  const lastElem = newArr.length - 1
  for (let i = lastElem; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    ;[newArr[i], newArr[j]] = [newArr[j], newArr[i]]
  }
  return newArr
}

const WAIT_TIME = 500

export const Game = ({ onResult }) => {
  const [selectedCards, setSelectedCards] = useState([])

  const handleSelectCard = (cardId) => {
    if (selectedCards.length >= 3) return onResult({ isWin: false })

    const card = cards?.find((_, id) => cardId === id)
    const newSelectedCards = [...selectedCards, card]
    setSelectedCards(newSelectedCards)

    const hasDiscount = newSelectedCards.some(({ discount }) => discount > 0)
    if (hasDiscount) return setTimeout(() => onResult({ isWin: true }), WAIT_TIME)
  }

  const cards = useMemo(() => getShuffleArray(variants), [])

  return (
    <div className='App'>
      <p className='modal-title'>Спрятали промокод на скидку -10%</p>
      <p className='modal-description'>У вас есть 3 попытки, чтобы его найти</p>
      <div className='modal-cards-body'>
        {cards.map((card, id) => {
          const isSelect = selectedCards?.find(({ id }) => id === card?.id)
          return <Card card={{ ...card, id }} onClick={handleSelectCard} isSelect={isSelect} />
        })}
      </div>
    </div>
  )
}
