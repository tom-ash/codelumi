import React, { useState } from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { SkillView, SkillProps } from './skill.types'

function Skill(props: SkillProps) {
  useStyles(styles)

  const {
    name,
    level,
    selectSkill,
    unselectSkill,
    view,
  } = props
  const levels = ['Novice', 'Junior', 'Mid', 'Senior', 'Expert']
  const [skillHovered, setSkillHovered] = useState(false)
  const [hovered, setHovered] = useState(0)
  const levelName = hovered ? levels[hovered - 1] : levels[level - 1]
  const formProps = {
    onMouseOver: () => setSkillHovered(true),
    onMouseLeave: () => setSkillHovered(false)
  }

  return (
    <div className='skill'>
      <div className='name'>{name}</div>
      <div
        className='levels'
        {...(view === SkillView.formSelectable || view === SkillView.formSelected) && formProps}
      >
        {levels.map((availableLevel, index) => {
          const fillClass =  skillHovered ? (hovered > index ? levelName.toLowerCase() : '') : (level > index || hovered > index ? levelName.toLowerCase() : '')
          const classNames = ['level', fillClass]
          const sharedLevelProps = { className: classNames.join(' '), key: availableLevel }
          const formProps = {
            onMouseOver: () => setHovered(index + 1),
            onMouseLeave: () => setHovered(0),
          }
          const formSelectableProps = {
            onClick: () => selectSkill({ name, level: hovered }),
          }

          return (
            <div
              {...sharedLevelProps}
              {...(view === SkillView.formSelectable || view === SkillView.formSelected) && formProps}
              {...(view === SkillView.formSelectable) && formSelectableProps}
            />
          )
        })}
        <div className='float-clear' />
      </div>
      <div className='level-name'>{levelName}</div>
      {view === SkillView.formSelected && (
        <div
          className='delete'
          onClick={() => unselectSkill({ name, level: undefined })}
        />
      )}
    </div>
  )
}

export default Skill
