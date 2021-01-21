import React from 'react'
import { langHandler } from '../../../../../../../functions/lang-handler'
import { langObjHandler } from '../../../../../../../functions/lang-handler'
import { features } from '../../../../../constants/features'
import { furnishings } from '../../../../../constants/furnishings'
import ScalableVectorGraphic from '../../../../../../support/components/scalable-vector-graphic/scalable-vector-graphic'
import Header from '../../../../../../support/components/header/header.js'
import { FEATURES_HEADER, FURNISHINGS_HEADER } from './constants/texts.js'

class AnnouncementShowFeaturesFurnishings extends React.Component {
  constructor(props) {
    super(props)
    this.langHandler = langHandler.bind(this)
    this.langObjHandler = langObjHandler.bind(this)
    // this.nodes = this.props.itemsName === 'features' ? features : furnishings
  }
  
  render() {
    const {
      itemsName,
      items,
      scalableVectorGraphics
    } = this.props

    const isFeatures = itemsName === 'features'
    const nodes = isFeatures ? features : furnishings
    const headerText = isFeatures ? FEATURES_HEADER : FURNISHINGS_HEADER

    return (
      <div className='announcement-show-tile-features'>
        <Header tier={2} text={this.langObjHandler(headerText)} />
        {
        items && items.map(item => (
        <div
          className='item'
          key={item}
        >
          <div className='icon'>
            <ScalableVectorGraphic pathData={scalableVectorGraphics && scalableVectorGraphics.check} />
          </div>
          <div className='text'>
            {this.langObjHandler(nodes.find(node => node.ref === item))}
          </div>
          <div className='float-clear' />
        </div>
        ))
        }
        <div className='float-clear' />
      </div>
    )
  }
}

export default AnnouncementShowFeaturesFurnishings