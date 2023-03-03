import React, { useContext} from 'react'
// import { ManagedButton } from 'managed-inputs'
// import { submit } from '../functions/submit'
import { useStore } from 'react-redux'
// import AppContext from '../../../../../../../constants/context'

import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import Skill from '../shared/components/skill/skill'
import { SkillViews } from '../shared/components/skill/skill.types'

const PostingIndex = () => {
  useStyles(styles)

  const state = useStore().getState()
  const { data } = state
  const {
    postings,
  } = data

  return (
    <div id='posting-index'>
      {postings.map((posting: any) => {
        return (
          <div className='tile' key={posting.id}>
            <div className='company-name'>
              {posting.id}
            </div>
            {posting.skills.map((skill: any) => {
              return <Skill key={skill.name} name={skill.name} level={skill.level} view={SkillViews.indexVisitor}/>
            })}
            <div className='float-clear' />
          </div>
        )
      })}
    </div>
  )
}

export default PostingIndex
