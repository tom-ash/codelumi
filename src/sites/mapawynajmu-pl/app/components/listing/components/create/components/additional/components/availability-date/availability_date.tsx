import React from 'react'
import { useStore } from '../../../../../../../../../../shared/app/functions/store/useStore'
import loadable from '@loadable/component'
import { ShowAvailabilityDate } from './components/show-availability-date/show-availability-date.checkbox'
const Calendar = loadable(() => import('../../../../../../../support/components/calendar/calendar'), { ssr: false })
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'

export const AvailabilityDate = () => {
  useStyles(styles)

  const { state } = useStore()
  const { inputs } = state
  const { showAvailabilityDate } = inputs

  return (
    <div className='availability-date'>
      <ShowAvailabilityDate />
      {showAvailabilityDate && <Calendar />}
    </div>
  )
}
