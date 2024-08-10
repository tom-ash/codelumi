import React from 'react'
import { useData } from '../../../../../../../../shared/app/functions/store/use-data'
import { Skills as SkillsPartial } from '../../../common/skills/skills'
import { SkillView } from '../../../shared/components/skill/skill.types'

interface SkillsInterface {
  (props: {}): React.ReactElement
}

export const Skills: SkillsInterface = () => {
  const {
    posting: { skills },
  } = useData()

  return (
    <SkillsPartial
      skills={skills}
      view={SkillView.INDEX_LIST}
    />
  )
}
