import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { changeRoute } from '../../../../functions/routers'
import './styles/styles.scss'
import { pageHeaderProvider } from '../../../../functions/providers/headers'
import { languageHandler, languageObjectHandler } from '../../../../functions/language-handler'
import { features } from './constants/features'

class About extends React.Component {
  constructor(props) {
    super(props)
    this.changeRoute = changeRoute.bind(this)
    this.pageHeaderProvider = pageHeaderProvider.bind(this)
    this.languageHandler = languageHandler.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
  }
  render() {
    return(
      <div id='visitor-about'>
        {this.pageHeaderProvider('fas fa-info-circle', { polish: 'O Serwisie', english: 'About' })}
        <div className='paragraph'>
          {
          this.languageHandler(
          <span>Serwis internetowy znajdujący się po adresem <u>warsawlease.pl</u> umożliwia wyszukiwanie biur oraz&nbsp;lokali użytkowych znajdujących się w obszarze m.&nbsp;st.&nbsp;Warszawy.</span>,
          <span>The Internet Service located under the address <u>warsawlease.pl</u> alllows searching of offices and commercial premises located within the area of&nbsp;the&nbsp;Capital City of Warsaw.</span>)
          }
        </div>
        <div className='paragraph features'>
          {
          this.languageHandler(
          <span>Serwis jest:</span>,
          <span>The Service is:</span>)
          }
        </div>
        {
        features.map((feature, index) => (
          <div className='feature' key={index}>
            <i className="fas fa-check-circle"></i>  {this.languageObjectHandler(feature)}
          </div>
        ))
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(About)