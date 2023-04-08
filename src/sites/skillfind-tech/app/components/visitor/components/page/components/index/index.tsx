import React from 'react'
import { useStore } from '../../../../../../../../shared/app/functions/store/useStore'
import { HeadingTwo } from '../../../../../../../../shared/app/components/support/headings/heading-two'
import { Link } from '../../../../../../../../shared/app/components/support/link/link'
import { FloatClear } from '../../../../../../../../shared/app/components/support/float-clear/float-clear'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'

const VisitorPageIndex = () => {
  useStyles(styles)

  const { state } = useStore()
  const { texts, data } = state
  const { honeYourSkillsHeadingTwo } = texts
  const { pages } = data

  return (
    <div id='visitor-page-index'>
      <HeadingTwo text={honeYourSkillsHeadingTwo} />
      {/* @ts-ignore */}
      {pages.map(page => {
        const { coverImage: image, title, href, hrefLang } = page

        const imageProps = {
          src: image,
          alt: title,
        }

        const label = title

        const linkProps = {
          label,
          href,
          hrefLang,
        }

        return <Link {...linkProps} />
      })}
      <FloatClear />
    </div>
  )
}

export default VisitorPageIndex
