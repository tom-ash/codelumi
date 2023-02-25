import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import Skill from '../../../../../shared/components/skill/skill'
import { useDispatch, useStore } from 'react-redux'
import { selectSkillFactory } from './functions/select-skill-factory'
import { unselectSkillFactory } from './functions/unselect-skill-factory'
import { SkillInterface } from '../../../../../shared/components/skill/skill.types'

function SkillSelector() {
  useStyles(styles)

  const state = useStore().getState()
  const { texts, inputs } = state
  const {
    skills
  } = texts
  const {
    selectableSkills,
    selectedSkills,
  } = inputs
  const dispatch = useDispatch()
  const setInputs = (value: any) => dispatch({ type: 'inputs', value })
  const selectSkill = (selectedSkill: SkillInterface) => selectSkillFactory({
    selectedSkill,
    selectedSkills,
    selectableSkills,
    setInputs,
  })
  const unselectSkill = (unselectedSkill: SkillInterface) => unselectSkillFactory({
    unselectedSkill,
    selectedSkills,
    selectableSkills,
    setInputs,
  })

  return (
    <>
      <h2>{skills}</h2>
      <div id='skill-selector'>
        <div id='selectable-skills'>
          {selectableSkills.map((skill: SkillInterface) => (
            <Skill
              {
                ...{
                  ...skill,
                  selectSkill,
                }
              }
              key={skill.name}
            />
          ))}
        </div>
        <div id='selected-skills'>
          {selectedSkills.map((skill: SkillInterface) => (
            <Skill
              {
                ...{
                  ...skill,
                  selectSkill,
                  unselectSkill,
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
