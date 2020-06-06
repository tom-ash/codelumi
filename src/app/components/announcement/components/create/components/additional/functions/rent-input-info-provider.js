import React from 'react'

export function rentInputInfoProvider() {
  const { category } = this.props
  const netRentCategory = [0,1].indexOf(category) !== -1
  const text = this.languageObjectHandler({
    pl: <span>Miesięczny czynsz {netRentCategory && 'netto '}oznacza miesięczną kwotę {netRentCategory && 'netto '}należną wynajmującemu od najemcy za&nbsp;wynajem.</span>,
    en: <span>Monthly {netRentCategory && 'Net '}Rent means the monthly {netRentCategory && 'net '}amount due to&nbsp;the&nbsp;lessor from the lessee for the lease.</span>
  })

  return (
    <div className='input-explanation'>
      <i className='fas fa-info-circle' /> {text}
    </div>
  )
}