import React from 'react'
import { Panel } from './components/panel/panel'
import { Filter } from '../filter/filter'

export const Category = () => (
  <Filter
    name='category'
    panel={<Panel />}
  />
)
