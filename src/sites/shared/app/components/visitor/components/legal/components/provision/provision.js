import React from 'react'

const VisitorLegalProvision = ({ langHandler, data: { tier, item, pl, en } }) => {
  return (
    <div className={`provision ${tier}`}>
      <div className='indent' />
      <div className='mark'>{item}</div>
      <div className='text'>{langHandler({ pl, en })}</div>
      <div className='float-clear' />
    </div>
  )
}

export default VisitorLegalProvision
