import React from 'react'
import { useData } from '../../../../../../../../../../shared/app/functions/store/use-data'
import { Line } from '../../../../../../../../../../mapawynajmu-pl/app/components/support/components/line/line'
import { Link as SupportLink } from '../../../../../../../../../../shared/app/components/support/link/link'

export const Link = () => {
  const {
    posting: { applicationLink },
  } = useData()

  if (!applicationLink) {
    return null
  }

  return (
    <>
      <section className='application-link'>
        <SupportLink
          href={applicationLink}
          label={applicationLink}
          title={applicationLink}
        />
      </section>
      <Line />
    </>
  )
}
