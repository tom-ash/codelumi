import React from 'react'
import { features } from '../../../../../constants/features'
import { furnishings } from '../../../../../constants/furnishings'
import { SVG } from '../../../../../../../../../shared/app/components/support/svg/svg'
import { Heading } from '../../../../../../support/components/heading'
import { FEATURES_HEADER, FURNISHINGS_HEADER } from './constants/texts'

class AnnouncementShowFeaturesFurnishings extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { itemsName, items } = this.props

    const isFeatures = itemsName === 'features'
    const nodes = isFeatures ? features : furnishings
    const headerText = isFeatures ? FEATURES_HEADER : FURNISHINGS_HEADER

    return (
      <div className='features'>
        <Heading
          tier={2}
          text={headerText['pl']} // TODO: LANG!
        />
        {items &&
          items.map(item => (
            <div
              className='item'
              key={item}
            >
              <div className='icon'>
                <SVG name='check' />
              </div>
              {/* TODO: LANG! */}
              <div className='text'>{nodes.find(node => node.ref === item)['pl']}</div>
              <div className='float-clear' />
            </div>
          ))}
        <div className='float-clear' />
      </div>
    )
  }
}

export default AnnouncementShowFeaturesFurnishings
