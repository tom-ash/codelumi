import React, { useEffect } from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { useInputs } from '../../../../../../../../shared/app/functions/store/use-inputs'
import { Select } from 'semanticize'
import Skill from '../../../shared/components/skill/skill'
import { SkillView } from '../../../shared/components/skill/skill.types'
import { FloatClear } from '../../../../../../../../shared/app/components/support/float-clear/float-clear'
import { changeUrl } from '../../../../../../../../shared/app/functions/routes/changers/change-url'
import { SVG } from '../../../../../../../../shared/app/components/support/svg/svg'
import { useTexts } from '../../../../../../../../shared/app/functions/store/use-texts'
import LogoIcon from '../../../../../scaffold/header/components/image/image'

interface PanelInterface {
  (params: {}): React.ReactElement
}

interface SelectedSkill {
  value: string
  text: string
  url: string
  level: number
}

export const Panel: PanelInterface = () => {
  useStyles(styles)

  const { skillSelectPlaceholder } = useTexts()
  const { skillOptions, selectedSkills } = useInputs()

  return (
    <div className='panel'>
      <Select
        className='select'
        options={skillOptions}
        value={''}
        placeholder={skillSelectPlaceholder}
        searchable={true}
        onSelect={value => {
          const newSelectedSkills = [...selectedSkills]
          const newSelectedSkill = skillOptions.find((skillOption: any) => {
            return skillOption.value === value
          })

          newSelectedSkills.push({ ...newSelectedSkill, level: 0 })

          if (newSelectedSkills.length > 0) {
            let queryParameters: string[] = []

            newSelectedSkills.map((selectedSkill: SelectedSkill) => {
              const { url, level } = selectedSkill

              queryParameters.push(`${url}=${level}`)
            })

            changeUrl({ href: `?${queryParameters.join('&')}` })
          } else {
            changeUrl({ href: '/' })
          }
        }}
      >
        <LogoIcon />
      </Select>
      <section className='selected-skills'>
        {selectedSkills.map((selectedSkill: any) => {
          const { value, level } = selectedSkill

          return (
            <Skill
              key={value}
              name={value}
              level={level}
              view={SkillView.INDEX_PANEL}
              // @ts-ignore
              selectSkill={({ name, level }) => {
                const newSelectedSkills = [...selectedSkills]
                const newSelectedSkill = skillOptions.find((skillOption: any) => {
                  return skillOption.value === name
                })

                newSelectedSkills.push({ ...newSelectedSkill, level })

                if (newSelectedSkills.length > 0) {
                  let queryParameters: string[] = []

                  newSelectedSkills.map((selectedSkill: SelectedSkill) => {
                    const { url, level } = selectedSkill

                    queryParameters.push(`${url}=${level}`)
                  })

                  changeUrl({ href: `?${queryParameters.join('&')}` })
                } else {
                  changeUrl({ href: '/' })
                }
              }}
            />
          )
        })}
        <FloatClear />
      </section>
    </div>
  )
}
