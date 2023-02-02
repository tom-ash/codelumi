import React from 'react'
// import AppContext from '../../../../../../../../constants/context'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import { Line } from '../../../../../../../support/components/line/line'
import styles from './styles/styles.scss'

export const Confirmation = () => {
  useStyles(styles)

  return (
    <div id='user-create-confirmation'>
      <h1>
        Potwierdzenie utworzenia konta
      </h1>
      <Line />
      <div>
        Gratulacje!
      </div>
      <div>
        Twoje konto zostało utworzone!
      </div>
      <div>
        LINK - DODAJ OGŁOSZENIE
      </div>
      <div>
        LINK - MOJE OGŁOSZENIA
      </div>
      <div>
        LINK - PRZEJDŹ DO STRONY GŁóWNEJ
      </div>
    </div>
  )
}
