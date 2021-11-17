import React from 'react'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles/styles.scss'
import Skill from '../../../shared/components/skill/skill.js'

function SkillSelector(props) {
  useStyles(styles)

  const { selectableSkills, selectedSkills, changeState } = props

  function selectSkill(selectedSkill) {
    const newSelectedSkills = [ ...selectedSkills ].concat([selectedSkill])
    const newSelectableSkills = [ ...selectableSkills ].filter(skill => skill.tag !== selectedSkill.tag)
    changeState({ selectableSkills: newSelectableSkills, selectedSkills: newSelectedSkills })
  }

  return (
    <>
      <h2>
        Select Skills
      </h2>
      <div id='skill-selector'>
        <div id='selectable-skills'>
          {selectableSkills.map(skill => (
            <Skill {...{ ...skill, selectSkill }} key={skill.tag}/>
          ))}
        </div>
        <div id='selected-skills'>
          {selectedSkills.map(skill => (
            <Skill {...skill} key={skill.tag}/>
          ))}
        </div>
        <div className='float-clear' />
      </div>
    </>
  )
  
}

export default SkillSelector
