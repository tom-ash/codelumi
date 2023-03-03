import React, { useState } from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { SkillView, SkillProps, SkillLevel } from './skill.types'
import { SkillLevels } from './components/levels'

const levelNames = Object.values(SkillLevel)

function Skill(props: SkillProps) {
  useStyles(styles)

  const {
    view,
    name,
    level,
    selectSkill,
    unselectSkill,
  } = props
  const [levelHovered, setLevelHovered] = useState(0)
  const levelName = levelHovered ? levelNames[levelHovered - 1] : levelNames[level - 1]

  const levelsProps = {
    view,
    name,
    level,
    levelNames,
    levelName,
    levelHovered,
    selectSkill,
    setLevelHovered,
  }

  return (
    <div className='skill'>
      <div className='name'>{name}</div>
      <SkillLevels {...levelsProps} />
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
