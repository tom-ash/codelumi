import React from 'react'
import { langHandler } from '../../../../../../../functions/lang-handler'
import { features } from '../../../../../constants/features'
import { furnishings } from '../../../../../constants/furnishings'
import SVG from '../../../../../../support/components/svg/svg'
import { Heading } from '../../../../../../support/components/heading'
import { FEATURES_HEADER, FURNISHINGS_HEADER } from './constants/texts'

class AnnouncementShowFeaturesFurnishings extends React.Component {
  constructor(props) {
    super(props)
    this.langHandler = langHandler.bind(this)
  }

  render() {
    const { itemsName, items } = this.props

    const isFeatures = itemsName === 'features'
    const nodes = isFeatures ? features : furnishings
    const headerText = isFeatures ? FEATURES_HEADER : FURNISHINGS_HEADER

    return (
      <div className='features'>
        <Heading tier={2} text={this.langHandler(headerText)} />
        {items &&
          items.map(item => (
            <div className='item' key={item}>
              <div className='icon'>
                <SVG name='check' />
              </div>
              <div className='text'>{this.langHandler(nodes.find(node => node.ref === item))}</div>
              <div className='float-clear' />
            </div>
          ))}
        <div className='float-clear' />
      </div>
    )
  }
}

export default AnnouncementShowFeaturesFurnishings
