import React from 'react'
import { useData } from '../../../../../../../../../../shared/app/functions/store/use-data'
import { Line } from '../../../../../../../../../../mapawynajmu-pl/app/components/support/components/line/line'
import { useTexts } from '../../../../../../../../../../shared/app/functions/store/use-texts'
import { Link as SupportLink } from '../../../../../../../../../../shared/app/components/support/link/link'

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
          lang={'en'} // TODO
          label={applyButtonLabel}
          title={applicationLink}
          external={true}
        />
      </section>
      <Line />
    </>
  )
}
