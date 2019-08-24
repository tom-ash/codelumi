import React from 'react'

export const sorters = [
  { value: 'updateasc', text: {
      polish: <span>Dacie aktualizacji <i className='fas fa-long-arrow-alt-down'/></span>,
      english: <span>Update Date <i className='fas fa-long-arrow-alt-down'/></span> } },
  { value: 'updatedesc', text: {
      polish: <span>Dacie aktualizacji <i className='fas fa-long-arrow-alt-up'/></span>,
      english: <span>Update Date <i className='fas fa-long-arrow-alt-up'/></span> } },
  { value: 'createasc', text: {
      polish: <span>Dacie utworzenia <i className='fas fa-long-arrow-alt-down'/></span>,
      english: <span>Add Date <i className='fas fa-long-arrow-alt-down'/></span> } },
  { value: 'createdesc', text: {
      polish: <span>Dacie utworzenia <i className='fas fa-long-arrow-alt-up'/></span>,
      english: <span>Add Date <i className='fas fa-long-arrow-alt-up'/></span> } },
  { value: 'viewsasc', text: {
      polish: <span>Liczbie odwiedzin <i className='fas fa-long-arrow-alt-down'/></span>,
      english: <span>Views <i className='fas fa-long-arrow-alt-down'/></span> } },
  { value: 'viewsdesc', text: {
      polish: <span>Liczba odwiedzin <i className='fas fa-long-arrow-alt-up'/></span>,
      english: <span>Views <i className='fas fa-long-arrow-alt-up'/></span> } }
]