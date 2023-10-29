import React from 'react'
import { FloatClear } from '../../../float-clear/float-clear'
import { Image } from '../../../image/image'
import { Link } from '../../../link/link'
import { useData } from '../../../../../functions/store/use-data'

interface IndexInterface {
  (): React.ReactElement
}

interface PageItem {
  href: string
  hrefLang: Lang
  title: string
  image: string
}

const Index: IndexInterface = () => {
  const { pages = [] } = useData() as { pages: PageItem[] }

  return (
    <div className='index'>
      {pages.map(page => {
        const { href, hrefLang, title, image } = page

        const imageProps = {
          src: image,
          alt: title,
        }

        const label = (
          <>
            <Image {...imageProps} />
            <h2>{title}</h2>
          </>
        )

        const linkProps = {
          href,
          hrefLang,
          label,
          title,
        }

        return <Link {...linkProps} />
      })}
      <FloatClear />
    </div>
  )
}

export default Index
