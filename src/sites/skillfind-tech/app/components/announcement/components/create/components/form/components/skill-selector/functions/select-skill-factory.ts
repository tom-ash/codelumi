import { SkillProps } from '../../../../../../shared/components/skill/skill.types'

type SelectSkillFactory = (props: {
  selectedSkill: SkillProps
  selectedSkills: SkillProps[]
  selectableSkills: SkillProps[]
  setInputs(props: object): void
}) => void

export const selectSkillFactory: SelectSkillFactory = props => {
  const { selectedSkill, selectableSkills, selectedSkills, setInputs } = props

  const newSelectedSkills = [...selectedSkills]
    .filter(skill => skill.name !== selectedSkill.name)
    .concat([selectedSkill])
  const newSelectableSkills = [...selectableSkills].filter(skill => skill.name !== selectedSkill.name)

  setInputs({
    selectableSkills: newSelectableSkills,
    selectedSkills: newSelectedSkills,
  })
}
