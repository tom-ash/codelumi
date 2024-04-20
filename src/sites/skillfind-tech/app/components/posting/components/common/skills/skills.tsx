import React from 'react'
import { SkillProps, SkillView } from '../../shared/components/skill/skill.types'
import Skill from '../../shared/components/skill/skill'

interface SkillsInterface {
  (props: {
    skills: SkillProps[];
    view: SkillView;
  }): React.ReactElement
}

export const Skills: SkillsInterface = props => {
  const {
    skills,
    view,
  } = props

  return (
    <div className='skills'>
      {skills.map(skill => {
        return (
          <Skill
            key={skill.name}
            name={skill.name}
            level={skill.level}
            view={view}
          />
        )
      })}
      <div className='float-clear' />
    </div>
  )
}
