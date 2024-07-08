import React, { useState } from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { SkillProps, SkillLevel } from './skill.types'
import { SkillLevels } from './components/levels'

const levels = Object.values(SkillLevel)

function Skill(props: SkillProps) {
  useStyles(styles)

  const { view, name, level, children, onLevelClicked } = props
  const [levelHovered, setLevelHovered] = useState(0)
  const levelName = levelHovered ? levels[levelHovered - 1] : levels[level - 1]

  const levelsProps = {
    view,
    name,
    level,
    levels,
    levelName,
    levelHovered,
    setLevelHovered,
    onLevelClicked,
  }

  return (
    <div className='skill'>
      <div className='name'>{name}</div>
      <SkillLevels {...levelsProps} />
      {/* <div className='level-name'>{levelName}</div> */}
      {children}
    </div>
  )
}

export default Skill
