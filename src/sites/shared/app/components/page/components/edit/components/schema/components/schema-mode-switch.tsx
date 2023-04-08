import React from 'react'
import { Switch } from '../../../../../../support/switch/switch'

export const SchemaModeSwitch = () => {
  const switchProps = {
    switchKey: 'schemaMode',
    customSwitchValues: ['auto', 'manual'],
  }

  return <Switch {...switchProps} />
}
