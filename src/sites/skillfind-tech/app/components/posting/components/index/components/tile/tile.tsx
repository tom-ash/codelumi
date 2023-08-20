import React from 'react'
import Skill from '../../../shared/components/skill/skill'
import { SkillProps, SkillView } from '../../../shared/components/skill/skill.types'
import { PostingIndexTileIndustry } from '../components/industry/industry'

interface PostingIndexTileInterface {
  (props: { id: number; b2bMin?: number; b2bMax?: number; skills: SkillProps[] }): React.ReactElement
}

export const PostingIndexTile: PostingIndexTileInterface = props => {
  const { id, b2bMin, b2bMax, skills } = props

  return (
    <div
      className='tile'
      key={id}
    >
      <PostingIndexTileIndustry />
      <div className='remuneration'>
        <strong>
          {b2bMin} - {b2bMax} PLN
        </strong>
      </div>
      <div className='skills'>
        {skills.map(skill => {
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
    </div>
  )
}
