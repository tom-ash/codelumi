import React from 'react'
import { HeadingTwo } from '../../../../../../../../shared/app/components/support/headings/heading-two'
import { Link } from '../../../../../../../../shared/app/components/support/link/link'
import { FloatClear } from '../../../../../../../../shared/app/components/support/float-clear/float-clear'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import Image from '../../../../../../../../shared/app/components/support/image/image'
import { useTexts } from '../../../../../../../../shared/app/functions/store/use-texts'
import { useData } from '../../../../../../../../shared/app/functions/store/use-data'
import { useApp } from '../../../../../../../../shared/app/functions/store/use-app'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { SkillTile } from './components/skill-tile/skill-tile'
import { Slider } from '../../../../../../../../shared/app/components/support/slider/slider'
import { ArticleTile } from './components/article-tile/article-tile'

const VisitorPageIndex = () => {
  useStyles(styles)

  const { skillsHeading, featuredArticlesHeading } = useTexts()
  const { pages, articles } = useData()

  const skillsSliderDeviceConfig = {
    largePc: { perPage: 4, gap: 40, type: 'loop' },
    mediumPc: { perPage: 4, gap: 40, type: 'loop', padding: 50 },
    smallPc: { perPage: 3, gap: 40, type: 'loop', padding: 60 },
    largeTablet: { perPage: 2, gap: 40, type: 'loop', padding: 60 },
    smallTablet: { perPage: 2, gap: 40, type: 'loop', padding: 60 },
    largePhone: { perPage: 1, gap: 30, type: 'loop', padding: 60 },
    smallPhone: { perPage: 1, gap: 30, type: 'loop', padding: 60 },
  }

  const articlesSliderDeviceConfig = {
    largePc: { perPage: 3, gap: 40, type: 'loop' },
    mediumPc: { perPage: 3, gap: 40, type: 'loop', padding: 50 },
    smallPc: { perPage: 2, gap: 40, type: 'loop', padding: 60 },
    largeTablet: { perPage: 2, gap: 40, type: 'loop', padding: 60 },
    smallTablet: { perPage: 1, gap: 40, type: 'loop', padding: 60 },
    largePhone: { perPage: 1, gap: 20, type: 'loop', padding: 50 },
    smallPhone: { perPage: 1, gap: 20, type: 'loop', padding: 50 },
  }

  return (
    <div id='visitor-page-index'>
      <div className='skills'>
        <HeadingTwo text={skillsHeading} />
        <Slider
          slides={pages}
          Slide={SkillTile}
          deviceConfig={skillsSliderDeviceConfig}
        />
      </div>
      <div className='articles'>
        <HeadingTwo text={featuredArticlesHeading} />
        <Slider
          slides={articles}
          Slide={ArticleTile}
          deviceConfig={articlesSliderDeviceConfig}
        />
      </div>
    </div>
  )
}

export default VisitorPageIndex
