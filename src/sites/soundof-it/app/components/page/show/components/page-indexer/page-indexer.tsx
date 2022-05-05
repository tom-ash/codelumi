import React from 'react'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles/styles.scss'
import CodeLink from '../code-link/code-link'

interface PageIndexerProps {
  // TODO
}

const links = [
  {
    logo: 'https://soundofit.s3.eu-central-1.amazonaws.com/assets/logos/html5.png',
    image: 'https://soundofit.s3.eu-central-1.amazonaws.com/assets/backgrounds/gradient-blurred-blues.jpg',
    title: 'HTML Tutorial',
    category: 'html',
    pathname: 'html-tutorial',
    hrefLang: 'en'
  }
]

const PageIndexer = (props: PageIndexerProps) => {
  useStyles(styles)

  return (
    <div className='page-indexer'>
      {links.map((link, index) => {
        const { logo, image, title, category, pathname, hrefLang } = link
        const linkProps = { ...props, logo, image, title, category, pathname, hrefLang }

        return <CodeLink {...{ ...linkProps, key: index }} />
      })}
    </div>
  )
}

export default PageIndexer
