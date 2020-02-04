import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { changeRoute } from '../../../../functions/routers'
import { pageHeaderProvider } from '../../../../functions/providers/headers'
import { languageHandler, languageObjectHandler } from '../../../../functions/language-handler'
import { features } from './constants/features'
import { CloseButton } from '../../../../components/support/components/close-button/close-button'

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
      <React.Fragment>
        <CloseButton classNames='page medium'/>
        <div
          id='visitor-about'
          className='container medium-container shadowed'
          onClick={e => e.stopPropagation()}
        >
          {this.pageHeaderProvider('fas fa-info-circle', { pl: 'O Serwisie', en: 'About' })}
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
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(About)