import React, { useState } from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { SkillViews, SkillProps } from './skill.types'
import { SkillLevels } from './components/levels'
import { SkillLevelsEnum } from './skill.types'

const skillLevels = Object.values(SkillLevelsEnum)

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
  const levelName = levelHovered ? skillLevels[levelHovered - 1] : skillLevels[level - 1]

  const levelsProps = {
    view,
    level,
    levelHovered,
    selectSkill,
    skillLevels,
    levelName,
    name,
    setLevelHovered,
  }

  return (
    <div className='skill'>
      <div className='name'>{name}</div>
      <SkillLevels {...levelsProps} />
      <div className='level-name'>{levelName}</div>
      {view === SkillViews.formSelected && (
        <div
          className='delete'
          onClick={() => unselectSkill({ name, level: undefined })}
        />
      )}
    </div>
  )
}

export default Skill
