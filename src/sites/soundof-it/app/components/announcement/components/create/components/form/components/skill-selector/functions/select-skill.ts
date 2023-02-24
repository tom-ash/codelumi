import { SkillInterface } from "../../../../../../shared/components/skill/skill.types"

type SelectSkill = (props: {
  selectedSkill: SkillInterface
  selectedSkills: SkillInterface[]
  selectableSkills: SkillInterface[]
  setInputs(props: object): void
}) => void

export const selectSkill: SelectSkill = (props) => {
  const {
    selectedSkill,
    selectableSkills,
    selectedSkills,
    setInputs,
  } = props

  const newSelectedSkills = [...selectedSkills].concat([selectedSkill])
  const newSelectableSkills = [...selectableSkills].filter(skill => skill.name !== selectedSkill.name)

  setInputs({
    selectableSkills: newSelectableSkills,
    selectedSkills: newSelectedSkills
  })
}
