import React from 'react'
import { useInputs } from '../../../../../../../../../../shared/app/functions/store/use-inputs'
import { useDispatch } from 'react-redux'
import { useApp } from '../../../../../../../../../../shared/app/functions/store/use-app'
import Skill from '../../../../../shared/components/skill/skill'
import { SkillView } from '../../../../../shared/components/skill/skill.types'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'

let ReactQuill: any
if (typeof window !== 'undefined') {
  ReactQuill = require('react-quill')
}

export const SocialImage = () => {
  useStyles(styles)

  const { country, locality, selectedSkills: skills } = useInputs()

  return (
    <section id='social-image'>
      <div className='business-logo'>[]</div>
      <div className='business-name'>[Business Name]</div>
      <div className='location'>
        {country}, {locality}
      </div>
      <div className='remuneration'>12000 - 16000</div>
      <div className='skills'>
        {/* TODO: any */}
        {skills.map((skill: any) => {
          return (
            <Skill
              key={skill.name}
              name={skill.name}
              level={skill.level}
              view={SkillView.indexVisitor}
            />
          )
        })}
        <div className='float-clear' />
      </div>
    </section>
  )
}
