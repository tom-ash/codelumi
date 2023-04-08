import React from 'react'
import { Tiles } from './components/tiles/tiles'
import { Filter } from '../filter/filter'

export const Category = () => <Filter name='category' panel={<Tiles />} />
