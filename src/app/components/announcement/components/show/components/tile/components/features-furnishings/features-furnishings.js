import React from 'react'
import { languageHandler } from '../../../../../../../../functions/language-handler'
import { languageObjectHandler } from '../../../../../../../../functions/language-handler'
import { features } from '../../../../../../constants/features'
import { furnishings } from '../../../../../../constants/furnishings'
import ScalableVectorGraphic from '../../../../../../../support/components/scalable-vector-graphic/scalable-vector-graphic'

class AnnouncementShowFeaturesFurnishings extends React.Component {
  constructor(props) {
    super(props)
    this.languageHandler = languageHandler.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.nodes = this.props.itemsName === 'features' ? features : furnishings
  }
  
  render() {
    const {
      itemsName,
      items,
      scalableVectorGraphics
    } = this.props

    return (
      <div id='announcement-show-tile-features'>
        {itemsName == 'features' &&
        <h3>{this.languageHandler('Zalety', 'Features')}</h3>}
        {itemsName == 'furnishings' &&
        <h3>{this.languageHandler('Wyposażenie', 'Furnishings')}</h3>}
        {
        items && items.map(item => (
        <div
        className='item'
        key={item}>
          <div className='icon'>
            <ScalableVectorGraphic pathData={scalableVectorGraphics && scalableVectorGraphics.check} />
          </div>
          <div className='text'>
            {this.languageObjectHandler(this.nodes.find(node => node.ref === item))}
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