import React from 'react'
import { HeadingTwo } from '../../../../../../../../shared/app/components/support/headings/heading-two'
import { Link } from '../../../../../../../../shared/app/components/support/link/link'
import { FloatClear } from '../../../../../../../../shared/app/components/support/float-clear/float-clear'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import Image from '../../../../../../../../shared/app/components/support/image/image'
import { useTexts } from '../../../../../../../../shared/app/functions/store/use-texts'
import { useData } from '../../../../../../../../shared/app/functions/store/use-data'

const VisitorPageIndex = () => {
  useStyles(styles)

  const texts = useTexts()
  const data = useData()
  const { honeYourSkillsHeadingTwo } = texts
  const { pages, articles } = data

  return (
    <div id='visitor-page-index'>
      <HeadingTwo text={honeYourSkillsHeadingTwo} />
      {/* @ts-ignore */}
      {pages.map(page => {
        const { coverImage: image, title, href, hrefLang } = page
        const label = title
        const linkProps = {
          label,
          href,
          hrefLang,
          customClassNames: 'skill',
        }

        return <Link {...linkProps} />
      })}
      <FloatClear />
      {/* @ts-ignore */}
      {articles.map(article => {
        const { image, title, href, hrefLang } = article

        const label = (
          <>
            <Image
              src={image}
              alt='asdasdasd'
            />
            <div>{title}</div>
          </>
        )

        const linkProps = {
          label,
          href,
          hrefLang,
          customClassNames: 'article',
        }

        return <Link {...linkProps} />
      })}
      <FloatClear />
    </div>
  )
}

export default VisitorPageIndex
