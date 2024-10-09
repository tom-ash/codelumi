import React from 'react'
import loadable from '@loadable/component'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import AnnouncementIndexPanel from './components/panel/panel'
const AnnouncementIndexMy = loadable(() => import('./components/my/my'))
import { parseCurrency } from '../../functions/currency-parsers'
import withStyles from 'isomorphic-style-loader-react18/withStyles'
import styles from './styles/styles.scss'
import { componentDidUpdate } from './functions/lifecycle'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { DeprecatedLink } from '../../../../../../shared/app/components/support/deprecated-link/deprecated-link'
import { MapIndex } from '../../../../../../shared/app/components/support/map-index/map-index'
import { ListingsIndexTile } from './components/listings-index-tile/listings-index-tile'
import { pinBuilder } from './functions/pin-builder'

const ListingsShow = loadable(() => import('../show/show'))

class AnnouncementIndexSearch extends React.Component {
  constructor(props) {
    super(props)
    this.parseCurrency = parseCurrency.bind(this)
    this.componentDidUpdate = componentDidUpdate
  }

  render() {
    const { renderMap, renderMy, articles, device, announcements, renderShow } = this.props

    // TODO: Find better solution.
    let perPage = 3
    switch (device) {
      case 'largeTablet':
        perPage = 2
        break
      case 'mediumTablet':
        perPage = 2
        break
      case 'smallTablet':
        perPage = 1
        break
      case 'largePhone':
        perPage = 1
        break
      case 'mediumPhone':
        perPage = 1
        break
      case 'smallPhone':
        perPage = 1
        break
      default:
        break
    }

    if (renderMap || renderShow) {
      return (
        <>
          <MapIndex
            renderShow={renderShow}
            Panel={AnnouncementIndexPanel}
            ListItem={ListingsIndexTile}
            ShowItem={ListingsShow}
            items={announcements}
            pinBuilder={pinBuilder}
            lang='pl'
          />
          <section id='visitor-articles-index'>
            <div className='slider'>
              <Splide
                options={{
                  perPage,
                }}
              >
                {articles.map(article => {
                  const label = (
                    <>
                      <img
                        src={article.image}
                        alt={article.title}
                      />
                      <h3 className='title'>{article.title}</h3>
                    </>
                  )

                  return (
                    <SplideSlide key={article.title}>
                      <DeprecatedLink
                        href={article.href}
                        hrefLang={article.hrefLang}
                        title={article.title}
                        label={label}
                      />
                    </SplideSlide>
                  )
                })}
              </Splide>
            </div>
          </section>
        </>
      )
    }

    if (renderMy) {
      return <AnnouncementIndexMy />
    }

    return null
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AnnouncementIndexSearch))
