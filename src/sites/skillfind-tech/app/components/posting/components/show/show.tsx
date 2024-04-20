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
import Image from '../../../../../../shared/app/components/support/image/image';
import { PostingIndexTileIndustry } from '../index/components/components/industry/industry';

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
    logo,
    businessName,
    industry,
  } = posting

  return (
    <div id='postings-show'>
      <GoBack />
      <div className='company'>
        <div className='company-logo'>
          <Image
            src={`https://s3.eu-central-1.amazonaws.com/skillfind-tech-dev/logos/${logo}`}
            alt='warsaw-digital'
          />
        </div>
        <div className='business-name'>{businessName}</div>
        <PostingIndexTileIndustry industry={industry} />
      </div>
      <LocationAndCooperationMode
        locality={locality}
        country={country}
        cooperationMode={cooperationMode}
      />
      <Remuneration
        b2bMin={b2bMin}
        b2bMax={b2bMax}
        employmentMin={employmentMin}
        employmentMax={employmentMax}
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
