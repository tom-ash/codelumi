import React from 'react'

export function rentInputInfoProvider() {
  const { category } = this.props
  const text = this.languageObjectHandler({
    pl: <span>Miesięczny czynsz {category !== 2 && 'netto '}oznacza miesięczną kwotę {category !== 2 && 'netto '}należną wynajmującemu od najemcy za&nbsp;wynajem.</span>,
    en: <span>Monthly {category !== 2 && 'Net '}Rent means the monthly {category !== 2 && 'net '}amount due to&nbsp;the&nbsp;lessor from the lessee for the lease.</span>
  })

  return (
    <div className='input-explanation'>
      <i className='fas fa-info-circle' /> {text}
    </div>
  )
}