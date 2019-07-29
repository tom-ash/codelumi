import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { languageHandler } from '../../../../../../functions/language-handler'
import { languageObjectHandler } from '../../../../../../functions/language-handler'
import { features } from '../../../../constants/features'
import { furnishings } from '../../../../constants/furnishings'
import './styles/styles.scss'

class AnnouncementShowFeaturesFurnishings extends React.Component {
  constructor(props) {
    super(props)
    this.languageHandler = languageHandler.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.header = this.getHeader.call(this)
    this.nodes = this.props.items === 'features' ? features : furnishings
  }

  getHeader() {
    if (this.props.items === 'features') {
      return  { polish: 'Zalety', english: 'Features' }
    }
    return { polish: 'Wyposażenie', english: 'Furnishings' }
  }
  
  render() {
    return (
      <div id='announcement-show-features'>
        {
        this.props.items == 'features' &&
        <h3><i className='fas fa-check-circle' /> {this.languageHandler('Zalety', 'Features')}</h3>
        }
        {
        this.props.items == 'furnishings' &&
        <h3><i className='fas fa-check-circle' /> {this.languageHandler('Wyposażenie', 'Furnishings')}</h3>
        }
        {
        this.props[this.props.items] && this.props[this.props.items].map(item => (
        <div
        className='item'
        key={item}>
          <div className='icon'>
            <i className='fas fa-circle' />
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

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementShowFeaturesFurnishings)