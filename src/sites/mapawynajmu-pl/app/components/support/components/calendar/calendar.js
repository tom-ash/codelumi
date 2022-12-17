import React from 'react'
import ReactCalendar from 'react-calendar/dist/entry.nostyle'
import withStyles from 'isomorphic-style-loader-react18/withStyles'
import styles from './styles/styles.scss'

const Calendar = props => {
  return <ReactCalendar {...props} />
}

export default withStyles(styles)(Calendar)
