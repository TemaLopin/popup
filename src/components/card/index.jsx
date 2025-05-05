import './style.css'

export const Card = ({ card, onClick, isSelect }) => {
  const { discount, id } = card || {}

  const handleClick = () => onClick(id)

  const classNameOpen = isSelect  ? 'open' : ''

  return (
    <div className={`card-wrapper ${classNameOpen}`} onClick={handleClick}>
      <div className='card center'>
        <div class='front'>{/* <img src={CardFrontImage} alt='card-front' /> */}</div>
        <div class='back'>
          {discount === 0 ? (
            <p className='card-empty-text'>
              Здесь пусто! <br /> Попробуйте еще раз
            </p>
          ) : (
            <div className='card-discount-body'>
              <p className='card-discount-title'>Ваша скидка:</p>
              <p className='card-discount-number'>{`${discount}%`}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
