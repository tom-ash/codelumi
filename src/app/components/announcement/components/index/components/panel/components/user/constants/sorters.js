import React from 'react'

export const sorters = [
  {
    value: 'updatedesc',
    text: {
      pl: <span>Dacie aktualizacji <i className='fas fa-long-arrow-alt-up'/></span>,
      en: <span>Update Date <i className='fas fa-long-arrow-alt-up'/></span>
    }
  },
  {
    value: 'updateasc',
    text: {
      pl: <span>Dacie aktualizacji <i className='fas fa-long-arrow-alt-down'/></span>,
      en: <span>Update Date <i className='fas fa-long-arrow-alt-down'/></span>
    }
  },
  {
    value: 'createdesc',
    text: {
      pl: <span>Dacie utworzenia <i className='fas fa-long-arrow-alt-up'/></span>,
      en: <span>Add Date <i className='fas fa-long-arrow-alt-up'/></span>
    }
  },
  {
    value: 'createasc',
    text: {
      pl: <span>Dacie utworzenia <i className='fas fa-long-arrow-alt-down'/></span>,
      en: <span>Add Date <i className='fas fa-long-arrow-alt-down'/></span>
    }
  },
  {
    value: 'viewsdesc',
    text: {
      pl: <span>Liczba odwiedzin <i className='fas fa-long-arrow-alt-up'/></span>,
      en: <span>Views <i className='fas fa-long-arrow-alt-up'/></span>
    }
  },
  {
    value: 'viewsasc',
    text: {
      pl: <span>Liczbie odwiedzin <i className='fas fa-long-arrow-alt-down'/></span>,
      en: <span>Views <i className='fas fa-long-arrow-alt-down'/></span>
    }
  }
]