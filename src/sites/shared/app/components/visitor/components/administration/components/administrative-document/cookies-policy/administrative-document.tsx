import React from 'react'
import { Provision } from '../../provision/provision'
import { Heading } from '../../../../../../../../../mapawynajmu-pl/app/components/support/components/heading'
import { useApp } from '../../../../../../../functions/store/use-app'
import { useTexts } from '../../../../../../../functions/store/use-texts'

interface AdministrativeDocumentInterface {
  (props: {
    identifier: string
    provisions: any[] // TODO!
  }): React.ReactElement
}

export const AdministrativeDocument: AdministrativeDocumentInterface = props => {
  const { identifier, provisions } = props
  const { lang } = useApp()
  const { headingOne } = useTexts()
  const headingOneProps = { tier: 1, text: headingOne }

  return (
    <div id={identifier}>
      <div className='container'>
        <Heading {...headingOneProps} />
        {provisions.map((provision, index) => (
          <Provision {...{ ...provision, lang, key: index }} />
        ))}
      </div>
    </div>
  )
}
