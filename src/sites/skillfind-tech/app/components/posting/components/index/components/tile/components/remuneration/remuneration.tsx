import React from 'react'

interface RemunerationInterface {
  (props: {
    b2bMin?: number;
    b2bMax?: number;
    // b2bCurrency?: string;
    employmentMin?: number;
    employmentMax?: number;
    // employmentCurrency?: string;
  }): React.ReactElement | null;
}

export const Remuneration: RemunerationInterface = (props) => {
  const {
    b2bMin,
    b2bMax,
    employmentMin,
    employmentMax,
  } = props
  
  if (b2bMin && b2bMax) {
    return (
      <div className='b2b-remuneration'>
        {b2bMin} - {b2bMax} PLN
      </div>
    )
  }

  if (employmentMin && employmentMax) {
    return (
      <div className='employment-remuneration'>
        {employmentMin} - {employmentMax} PLN
      </div>
    )
  }

  return null
}
