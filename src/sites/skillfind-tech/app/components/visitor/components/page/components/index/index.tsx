import React from 'react'
import { HeadingTwo } from '../../../../../../../../shared/app/components/support/headings/heading-two'
import { Link } from '../../../../../../../../shared/app/components/support/link/link'
import { FloatClear } from '../../../../../../../../shared/app/components/support/float-clear/float-clear'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import Image from '../../../../../../../../shared/app/components/support/image/image'
import { useTexts } from '../../../../../../../../shared/app/functions/store/use-texts'
import { useData } from '../../../../../../../../shared/app/functions/store/use-data'
import { SVG } from '../../../../../../../../shared/app/components/support/svg/svg'

const VisitorPageIndex = () => {
  useStyles(styles)

  const { skillsHeading, featuredArticlesHeading } = useTexts()
  const { pages, articles } = useData()

  return (
    <div id='visitor-page-index'>

      <div className='skills'>
        <HeadingTwo text={skillsHeading} />
        <div className='container'>
          {/* @ts-ignore */}
          {pages.map(page => {
            const { coverImage: image, title, href, hrefLang, description, pageCount, questionCount } = page
            console.log(description)
            const label = (
              <div>
                <div className='title'>
                  {title}
                </div>
                <div className='description'>
                  {description}
                </div>
                <div className='counts'>
                  <div className='page-count'>
                    <SVG name='collegeCap' /> {pageCount} tutorial pages
                  </div>
                  <div className='question-count'>
                  <SVG name='flaskVial' /> {questionCount} practice problems
                  </div>
                </div>
              </div>
            )
            // title
            const linkProps = {
              label,
              href,
              hrefLang,
              customClassNames: 'skill',
            }

            return <Link {...linkProps} />
          })}
          <FloatClear />
        </div>
      </div>


      <div className='articles'>
        <HeadingTwo text={featuredArticlesHeading} />
        <div className='container'>
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
      </div>
    </div>
  )
}

export default VisitorPageIndex
