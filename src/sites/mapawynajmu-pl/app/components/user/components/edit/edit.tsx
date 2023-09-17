import React from 'react'
import { Heading } from '../../../support/components/heading'
import { Line } from '../../../support/components/line/line'
import { UserEditBusinessName as BusinessName } from './components/business-name/business-name'
import { UserEditCountryCodeAndPhoneNumber as CountryCodeAndPhoneNumber } from './components/country-code-and-phone-number/country-code-and-phone-number'
import { UserEditDelete as Delete } from './components/delete/delete'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { AccountType } from '../../types/user.types'
import { useApp } from '../../../../../../shared/app/functions/store/use-app'
import { useTexts } from '../../../../../../shared/app/functions/store/use-texts'
import { useUser } from '../../../../../../shared/app/functions/store/use-user'

const UserEdit = () => {
  useStyles(styles)

  const { minInnerHeight } = useApp()
  const { headingOne } = useTexts()
  const { accountType } = useUser()
  const headingProps = {
    tier: 1,
    text: headingOne,
  }

  return (
    <div
      id='user-edit'
      style={{
        minHeight: minInnerHeight,
      }}
    >
      <div className='container'>
        <Heading {...headingProps} />
        <Line />
        {accountType === AccountType.BUSINESS && (
          <>
            <BusinessName />
            <Line />
          </>
        )}
        <CountryCodeAndPhoneNumber />
        <Line />
        <Delete />
      </div>
    </div>
  )
}

export default UserEdit
