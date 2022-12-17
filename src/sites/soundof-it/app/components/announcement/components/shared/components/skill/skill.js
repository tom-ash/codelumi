import React, { useState } from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'

function Skill(props) {
  useStyles(styles)

  const { name, level, selectSkill, unselectSkill } = props
  const availableLevels = ['Novice', 'Junior', 'Mid', 'Senior', 'Expert']
  const [hovered, setHovered] = useState(0)

  return (
    <div className='skill'>
      <div className='name'>{name}</div>
      <div className='availableLevels'>
        {availableLevels.map((availableLevel, index) => {
          const fillClass = level > index || hovered > index ? 'filled' : ''
          const classNames = ['level', availableLevel.toLowerCase(), fillClass]
          const sharedLevelProps = { className: classNames.join(' '), key: availableLevel }
          const extendedLevelProps = level
            ? {}
            : {
                onMouseOver: () => setHovered(index + 1),
                onMouseLeave: () => setHovered(0),
                onClick: () => selectSkill({ name, level: hovered }),
              }

          return <div {...sharedLevelProps} {...extendedLevelProps} />
        })}
        <div className='float-clear' />
        <div className='level-name'>{level ? availableLevels[level - 1] : availableLevels[hovered - 1]}</div>
        {level && <div className='delete' onClick={() => unselectSkill({ name, level: undefined })} />}
      </div>
    </div>
  )
}

export default Skill
