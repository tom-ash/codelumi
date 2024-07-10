import React from 'react'
import { useData } from '../../../../../../../../../../shared/app/functions/store/use-data'
import { Line } from '../../../../../../../../../../mapawynajmu-pl/app/components/support/components/line/line'
import { Link as SupportLink } from '../../../../../../../../../../shared/app/components/support/link/link'
import { useTexts } from '../../../../../../../../../../shared/app/functions/store/use-texts'

export const Link = () => {
  const {
    posting: { applicationLink },
  } = useData()

  const { applyButtonLabel } = useTexts()

  return (
    <>
      <section className='application-link'>
        <SupportLink
          href={applicationLink}
          label={applyButtonLabel}
          title={applicationLink}
        />
      </section>
      <Line />
    </>
  )
}
