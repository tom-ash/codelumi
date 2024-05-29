import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { useData } from '../../../../../../../../shared/app/functions/store/use-data'
import { SkillTile } from './components/skill-tile/skill-tile'
import { Slider } from '../../../../../../../../shared/app/components/support/slider/slider'

const VisitorPageIndex = () => {
  useStyles(styles)

  const { pages } = useData()

  const skillsSliderDeviceConfig = {
    largePc: { perPage: 5, gap: 30, type: 'slide', padding: { right: 100 }, arrows: true },
    mediumPc: { perPage: 4, gap: 40, type: 'slide', padding: { left: 20, right: 60 } },
    smallPc: { perPage: 3, gap: 40, type: 'slide', padding: { left: 20, right: 60 } },
    largeTablet: { perPage: 2, gap: 40, type: 'slide', padding: { left: 20, right: 60 } },
    smallTablet: { perPage: 2, gap: 40, type: 'slide', padding: { left: 20, right: 60 } },
    largePhone: { perPage: 1, gap: 30, type: 'slide', padding: { left: 20, right: 100 } },
    smallPhone: { perPage: 1, gap: 30, type: 'slide', padding: { left: 20, right: 100 } },
  }

  return (
    <div id='visitor-page-index'>
      <Slider
        slides={pages}
        Slide={SkillTile}
        deviceConfig={skillsSliderDeviceConfig}
      />
    </div>
  )
}

export default VisitorPageIndex
