import React from 'react'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles/styles.scss'

function SelectableSkill(props) {
  useStyles(styles)

  const {
    tag, name
  } = props

  const levels = ['novice', 'junior', 'mid', 'senior', 'expert']

  return (
    <div className='skill'>
      <div className='name'>
        {name}
      </div>
      <div className='levels'>
        {levels.map(level => (
          <div className='level' key={level}>
          </div>
        ))}
        <div className='float-clear' />
      </div>
    </div>
  )
  
}

export default SelectableSkill
