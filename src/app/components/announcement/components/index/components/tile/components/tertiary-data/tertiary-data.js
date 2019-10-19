import React from 'react'

export default function TertiaryData(props) {
  const {
    languageHandler,
    venue,
    rooms,
    floor,
    totalFloors
  } = props

  return (
    <div className={`tertiary ${venue}`}>
      <div className='rooms-container'>
        <div className='rooms'>
          <strong>{rooms}</strong> {languageHandler('pomieszczeń', 'rooms')}
        </div>
      </div>
      <div className='floor-container'>
        <div className='floor'>
          <strong>{floor}</strong> {languageHandler('piętro', 'floor')}
          &nbsp;
          ( z <strong>{totalFloors}</strong> )
        </div>
      </div>
    </div>
  )
}