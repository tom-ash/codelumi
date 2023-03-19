import React from 'react'
import { useStore } from '../../../../../../../../shared/app/functions/store/useStore'
import { FloatClear } from '../../../../../../../../shared/app/components/support/float-clear/float-clear'

// TODO: Add Image to support components.
import Image from '../../../../../../../../shared/app/components/support/render-node/components/image/image'
import { Link } from '../../../../../../../../shared/app/components/support/link/link'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'


const VisitorPageIndex = () => {
  useStyles(styles)

  const { state } = useStore()
  const { data } = state
  const { pages } = data

  return (
    <div id='visitor-page-index'>
      {/* @ts-ignore */}
      {pages.map(page => {
        const {
          coverImage: image,
          title,
          url,
          lang,
        } = page

        const imageProps = {
          src: image,
          alt: title,
        }

        const label = (
          <>
            <Image {...imageProps} />
            <h2>
              {title}
            </h2>
          </>
        )

        const linkProps = {
          label,
          href: url,
          hrefLang: lang,
        }

        return <Link {...linkProps} />
      })}
      <FloatClear />
    </div>
  )
}

export default VisitorPageIndex
