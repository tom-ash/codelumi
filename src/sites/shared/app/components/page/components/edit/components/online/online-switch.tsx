import React from 'react'
import { Switch } from '../../../../../support/switch/switch'

export const OnlineSwitch = () => {
  const switchProps = {
    switchKey: 'online',
  }

  return <Switch {...switchProps} />
}
