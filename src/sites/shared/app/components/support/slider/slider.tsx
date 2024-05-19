import React, { useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { useApp } from '../../../functions/store/use-app'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { Device } from '../../../../../skillfind-tech/app/types/device.enum'

interface DeviceConfigItem {
  perPage: number
  gap: number | string
  type?: string //'slide' | 'loop' | 'fade',
  padding?: number | string
  pagination?: boolean
}

interface DeviceConfig {
  largePc: DeviceConfigItem
  smallPc: DeviceConfigItem
  largeTablet: DeviceConfigItem
  smallTablet: DeviceConfigItem
  largePhone: DeviceConfigItem
  smallPhone: DeviceConfigItem
}

interface SliderProps {
  slides: any[]
  Slide(props: any): React.ReactElement
  deviceConfig: DeviceConfig
  commonProps?: object
}

interface SliderInterface {
  (props: SliderProps): React.ReactElement
}

export const Slider: SliderInterface = props => {
  useStyles(styles)

  const { slides, Slide, deviceConfig, commonProps } = props
  const app = useApp()
  const device = app.device as Device
  const { perPage, gap, type, padding, pagination } = deviceConfig[device]

  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <div className='slider'>
      <Splide
        options={{
          gap,
          perPage,
          type,
          padding,
          pagination,
          arrows: false,
          lazyLoad: 'nearby'
        }}
        onMoved={(e) => setCurrentIndex(e.index)}
      >
        {slides.map((slide: any, index) => (
          <SplideSlide>
            <Slide
              key={slide.id}
              loadImage={currentIndex >= index - 2}
              {...{ ...commonProps, ...slide }}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  )
}
