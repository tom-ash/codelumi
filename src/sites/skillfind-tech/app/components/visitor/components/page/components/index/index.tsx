import React from 'react'
import { HeadingTwo } from '../../../../../../../../shared/app/components/support/headings/heading-two'
import { Link } from '../../../../../../../../shared/app/components/support/link/link'
import { FloatClear } from '../../../../../../../../shared/app/components/support/float-clear/float-clear'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import Image from '../../../../../../../../shared/app/components/support/image/image'
import { useTexts } from '../../../../../../../../shared/app/functions/store/use-texts'
import { useData } from '../../../../../../../../shared/app/functions/store/use-data'
import { useApp } from '../../../../../../../../shared/app/functions/store/use-app'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { SkillTile } from './components/skill-tile/skill-tile'

const VisitorPageIndex = () => {
  useStyles(styles)

  const { skillsHeading, featuredArticlesHeading } = useTexts()
  const { pages, articles } = useData()
  const { isMobile } = useApp()

  return (
    <div id='visitor-page-index'>
      <div className='skills'>
        <HeadingTwo text={skillsHeading} />
        <div>
          <Splide
            options={{
              drag: 'free',
              perPage: isMobile ? 2 : 4,
              autoWidth: false,
            }}
          >
            {pages.map((page: any) => {
              return (
                <SplideSlide>
                  <SkillTile {...page} />
                </SplideSlide>
              )
            })}
          </Splide>
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
                <div className='cover'>
                  <Image
                    src={image}
                    alt={title}
                  />
                </div>
                <div className='title'>
                  {title}
                </div>
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
