import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { useApp } from '../../../functions/store/use-app'
// import { ResponsiveOptions } from 'slide'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'

enum Device {
  LARGE_PC = 'largePc',
  SMALL_PC = 'smallPc',
  LARGE_TABLET = 'largeTablet',
  SMALL_TABLET = 'smallTablet',
  LARGE_PHONE = 'largePhone',
  SMALL_PHONE = 'smallPhone',
}

interface DeviceConfigItem {
  perPage: number,
  gap: number | string,
  type?: string, //'slide' | 'loop' | 'fade',
  padding?: number | string,
}

interface DeviceConfig {
  largePc: DeviceConfigItem,
  smallPc: DeviceConfigItem,
  largeTablet: DeviceConfigItem,
  smallTablet: DeviceConfigItem,
  largePhone: DeviceConfigItem,
  smallPhone: DeviceConfigItem,
}

interface SliderProps {
  slides: any[],
  Slide(props: any): React.ReactElement,
  deviceConfig: DeviceConfig,
}

interface SliderInterface {
  (props: SliderProps): React.ReactElement
}

export const Slider: SliderInterface = props => {
  useStyles(styles)

  const { slides, Slide, deviceConfig } = props
  const app = useApp()
  const device = app.device as Device
  const { perPage, gap, type, padding } = deviceConfig[device]
  
  return (
    <div className='slider'>
      <Splide
        options={{
          gap,
          perPage,
          type,
          padding,
        }}
      >
        {slides.map((slide: any) => (
          <SplideSlide>
            <Slide {...slide} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  )
}
