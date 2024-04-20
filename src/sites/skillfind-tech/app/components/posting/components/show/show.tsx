import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { useData } from '../../../../../../shared/app/functions/store/use-data';
import { PostingIndexTile } from '../index/components/tile/tile';
import { GoBack } from './components/go-back/go-back';
import { Description } from './components/description/description';
import { SkillView } from '../shared/components/skill/skill.types';
import { Skills } from '../common/skills/skills';
import { LocationAndCooperationMode } from '../common/location-and-cooperation-mode/location-and-cooperation-mode';
import { Remuneration } from '../common/remuneration/remuneration';

interface PostingShowInterface {
  (props: {}): React.ReactElement;
}

const PostingsShow: PostingShowInterface = (props) => {
  useStyles(styles)

  const { posting } = useData()

  const {
    b2bMin,
    b2bMax,
    employmentMin,
    employmentMax,
    locality,
    country,
    cooperationMode,
    skills,
  } = posting

  return (
    <div id='postings-show'>
      <GoBack />
      <Remuneration
        b2bMin={b2bMin}
        b2bMax={b2bMax}
        employmentMin={employmentMin}
        employmentMax={employmentMax}
      />
      <LocationAndCooperationMode
        locality={locality}
        country={country}
        cooperationMode={cooperationMode}
      />
      <Skills
        skills={skills}
        view={SkillView.indexVisitor}
      />
      <Description />
    </div>
  )
}

export default PostingsShow
