import React from 'react'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles/styles.scss'
import SelectableSkill from './components/selectable-skill/selectable-skill.js'

function SkillSelector(props) {
  useStyles(styles)

  const skills = [
    {
      tag: 'javascript',
      name: 'JavaScript'
    },
    {
      tag: 'ruby',
      name: 'Ruby'
    }
  ]

  return (
    <>
      <h2>
        Select Skills
      </h2>
      <div id='skill-selector'>

        <div id='selectable-skills'>
          {skills.map(skill => (
            <SelectableSkill {...skill} key={skill.tag}/>
          ))}
        </div>
        <div id='selected-skills'>

        </div>
        <div className='float-clear' />
      </div>
      </>
  )
  
}

export default SkillSelector
