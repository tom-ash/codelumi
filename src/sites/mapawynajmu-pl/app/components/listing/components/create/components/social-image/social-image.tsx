import React from 'react'
import { SocialImageCanvas } from '../../../../../../../../shared/app/components/support/social-image-canvas/social-image-canvas'
import { useInputs } from '../../../../../../../../shared/app/functions/store/use-inputs'
// import { Rent } from '../../../common/rent/rent'
import { Area } from '../../../common/area/area'

import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'

import { Heading } from '../../../show/components/tile/components/heading'
import { useApp } from '../../../../../../../../shared/app/functions/store/use-app'
import { Rent } from '../../../common/rent/rent'

export const SocialImage = () => {
  useStyles(styles)

  const { lang } = useApp()
  const { category, pictures, area, locality, sublocality, rentCurrency, grossRentAmount, netRentAmount } = useInputs()
  const previewPicture = Array.isArray(pictures) && pictures[0]

  if (!previewPicture) {
    return null
  }

  return (
    <SocialImageCanvas>
      <img src={previewPicture.objectUrl} />
      <Heading
        tier={2}
        lang={lang}
        category={category}
        locality={locality}
        sublocality={sublocality}
      />
      <Area area={area} />
      <Rent
        rentAmount={grossRentAmount || netRentAmount}
        rentCurrency={rentCurrency}
      />
    </SocialImageCanvas>

  )
}
