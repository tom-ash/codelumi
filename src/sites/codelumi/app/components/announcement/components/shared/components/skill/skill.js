import React, { useState } from 'react';
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles/styles.scss'

function Skill(props) {
  useStyles(styles)

  const { tag, name, selected, selectSkill, unselectSkill } = props
  const levels = ['Novice', 'Junior', 'Mid', 'Senior', 'Expert']
  const [hovered, setHovered] = useState(0)  

  return (
    <div className='skill'>
      <div className='name'>
        {name}
      </div>
      <div className='levels'>
        {levels.map((level, index) => {
          const fillClass = selected > index || hovered > index ? 'filled' : ''
          const classNames = ['level', level.toLowerCase(), fillClass]
          const sharedLevelProps = { className: classNames.join(' '), key: level }
          const extendedLevelProps = selected ?
            {} :
            { onMouseOver: () => setHovered(index + 1), onMouseLeave: () => setHovered(0), onClick: () => selectSkill({ tag, name, selected: hovered }) }

          return <div
            {...sharedLevelProps}
            {...extendedLevelProps}
          />
        })}
        <div className='float-clear' />
        <div className='level-name'>
          {selected ? levels[selected - 1] : levels[hovered - 1]}  
        </div>
        {selected && (
          <div
            className='delete'
            onClick={() => unselectSkill({ tag, name, selected: undefined })}
          />
        )}
      </div>
    </div>
  )
}

export default Skill
