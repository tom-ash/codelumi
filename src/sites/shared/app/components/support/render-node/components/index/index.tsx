import React from 'react'
import { FloatClear } from '../../../float-clear/float-clear'
import { Image } from '../../../image/image'
import { Link } from '../../../link/link'
import { useData } from '../../../../../functions/store/use-data'

interface IndexInterface {
  (props: { withImages?: boolean }): React.ReactElement
}

interface PageItem {
  href: string
  hrefLang: Lang
  title: string
  image?: string
}

const Index: IndexInterface = (props) => {
  const { withImages = true } = props
  const { pages = [] } = useData() as { pages: PageItem[] }

  return (
    <ul className='index'>
      {pages.map(page => {
        const { href, hrefLang, title, image } = page

        const label = (
          <>
            {withImages && image && <Image src={image} alt={title} />}
            <h2>{title}</h2>
          </>
        )

        return (
          <li>
            <Link
              href={href}
              hrefLang={hrefLang}
              label={label}
              title={title}
            />
          </li>
        )
      })}
      <FloatClear />
    </ul>
  )
}

export default Index
