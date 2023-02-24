import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import Skill from '../../../../../shared/components/skill/skill'
import { useDispatch } from 'react-redux'
import { selectSkill } from './functions/select-skill'
import { unselectSkill } from './functions/unselect-skill'
import { SkillInterface } from '../../../../../shared/components/skill/skill.types'

interface SkillSelectorProps {
  selectableSkills: SkillInterface[]
  selectedSkills: SkillInterface[]
}

function SkillSelector(props: SkillSelectorProps) {
  useStyles(styles)

  const { selectableSkills, selectedSkills } = props
  const dispatch = useDispatch()
  const setInputs = (value: any) => dispatch({ type: 'inputs', value })

  return (
    <>
      <h2>Select Skills</h2>
      <div id='skill-selector'>
        <div id='selectable-skills'>
          {selectableSkills.map(skill => (
            <Skill
              {
                ...{
                  ...skill,
                  selectSkill: (selectedSkill: SkillInterface) => selectSkill({
                    selectedSkill,
                    selectedSkills,
                    selectableSkills,
                    setInputs,
                  })
                }
              }
              key={skill.name}
            />
          ))}
        </div>
        <div id='selected-skills'>
          {selectedSkills.map(skill => (
            <Skill
              {
                ...{
                  ...skill,
                  unselectSkill: (unselectedSkill: SkillInterface) => unselectSkill({
                    unselectedSkill,
                    selectedSkills,
                    selectableSkills,
                    setInputs,
                  })
                }
              }
              key={skill.name}
            />
          ))}
        </div>
        <div className='float-clear' />
      </div>
    </>
  )
}

export default SkillSelector
