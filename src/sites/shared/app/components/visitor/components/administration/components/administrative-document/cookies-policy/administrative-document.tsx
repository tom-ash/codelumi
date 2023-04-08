import React from 'react'
import { useStore } from '../../../../../../../functions/store/useStore'
import { Provision } from '../../provision/provision'
import { Heading } from '../../../../../../../../../mapawynajmu-pl/app/components/support/components/heading'

interface AdministrativeDocumentInterface {
  (props: {
    identifier: string
    provisions: any[] // TODO!
  }): React.ReactElement
}

export const AdministrativeDocument: AdministrativeDocumentInterface = props => {
  const { identifier, provisions } = props

  const { state } = useStore()
  const { app, texts } = state
  const { lang } = app
  const { headingOne } = texts
  const headingOneProps = { tier: 1, text: headingOne }

  return (
    <div id={identifier}>
      <Heading {...headingOneProps} />
      {provisions.map((provision, index) => (
        <Provision {...{ ...provision, lang, key: index }} />
      ))}
    </div>
  )
}
