import React from 'react'
import { SkillView } from '../skill.types'
import { SkillLevel } from '../skill.types'

interface SkillLevelsProps {
  value: string
  level: number
  levels: string[]
  levelName?: SkillLevel
  levelHovered: number
  view?: SkillView
  setLevelHovered(levelHovered: number): void
  onLevelClicked?(params: { value: string; level: number }): void
  setErrors?(params: { skills: null }): void
}

const levelClassNames = ['junior', 'mid', 'senior', 'expert']

export const SkillLevels = (props: SkillLevelsProps) => {
  const { value, view, level, levels, levelName, levelHovered, onLevelClicked, setLevelHovered, setErrors } = props

  return (
    <div className='levels'>
      {levels.map((availableLevel, index) => {
        const fillClass = levelHovered
          ? levelHovered > index
            ? levels[levelHovered - 1].toLowerCase()
            : ''
          : level > index
            ? levelClassNames[level - 1]
            : ''

        const classNames = ['level', fillClass]
        const sharedLevelProps = { className: classNames.join(' '), key: availableLevel }

        return (
          <div
            {...sharedLevelProps}
            {...((view === SkillView.FORM_SELECTABLE || view === SkillView.FORM_SELECTED) && {
              onMouseOver: () => setLevelHovered(index + 1),
              onMouseLeave: () => setLevelHovered(0),
              onClick: e => {
                e.stopPropagation()

                setErrors && setErrors({ skills: null })
                onLevelClicked && onLevelClicked({ value, level: levelHovered })
              },
            })}
            {...(view === SkillView.INDEX_PANEL && {
              onMouseOver: () => setLevelHovered(index + 1),
              onMouseLeave: () => setLevelHovered(0),
              onClick: e => {
                e.stopPropagation()

                const select = document.getElementById('visitor-postings-index-skill-select')
                select!.blur()

                onLevelClicked && onLevelClicked({ value, level: levelHovered })
              },
            })}
          >
            {index + 1 === levelHovered && <div className='level-name'>{levelName}</div>}
          </div>
        )
      })}
      <div className='float-clear' />
    </div>
  )
}
