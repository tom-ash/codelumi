import React from 'react'

export const sorters = [
  { value: 'updateasc', text: {
      polish: <span>dacie aktualizacji <i className='fas fa-long-arrow-alt-down'/></span>,
      english: <span>update date <i className='fas fa-long-arrow-alt-down'/></span> } },
  { value: 'updatedesc', text: {
      polish: <span>dacie aktualizacji <i className='fas fa-long-arrow-alt-up'/></span>,
      english: <span>update date <i className='fas fa-long-arrow-alt-up'/></span> } },
  { value: 'createasc', text: {
      polish: <span>dacie utworzenia <i className='fas fa-long-arrow-alt-down'/></span>,
      english: <span>add date <i className='fas fa-long-arrow-alt-down'/></span> } },
  { value: 'createdesc', text: {
      polish: <span>dacie utworzenia <i className='fas fa-long-arrow-alt-up'/></span>,
      english: <span>add date <i className='fas fa-long-arrow-alt-up'/></span> } },
  { value: 'viewsasc', text: {
      polish: <span>liczba odwiedzin <i className='fas fa-long-arrow-alt-down'/></span>,
      english: <span>views <i className='fas fa-long-arrow-alt-down'/></span> } },
  { value: 'viewsdesc', text: {
      polish: <span>liczba odwiedzin <i className='fas fa-long-arrow-alt-up'/></span>,
      english: <span>views <i className='fas fa-long-arrow-alt-up'/></span> } }
]