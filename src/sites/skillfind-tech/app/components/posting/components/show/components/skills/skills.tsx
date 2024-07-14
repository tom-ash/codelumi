import React from 'react'
import { useData } from '../../../../../../../../shared/app/functions/store/use-data'
import { SectionHeading } from '../../../../../../../../shared/app/components/support/headings/section-heading'
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
    <section id='searched-skills'>
      <SkillsPartial
        skills={skills}
        view={SkillView.indexVisitor}
      />
    </section>
  )
}
