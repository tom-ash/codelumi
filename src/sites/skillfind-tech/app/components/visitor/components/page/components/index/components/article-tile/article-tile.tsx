import React from 'react'
import { Link } from '../../../../../../../../../../shared/app/components/support/link/link'

import Image from '../../../../../../../../../../shared/app/components/support/image/image'

interface ArticleTileInterface {
  (props: { image: string; title: string; href: string; hrefLang: Lang }): React.ReactElement
}

export const ArticleTile: ArticleTileInterface = props => {
  const { image, title, href, hrefLang } = props

  const label = (
    <>
      <div className='cover'>
        <Image
          src={image}
          alt={title}
        />
      </div>
      <div className='title'>{title}</div>
    </>
  )

  const linkProps = {
    label,
    href,
    hrefLang,
    customClassNames: 'article',
  }

  return <Link {...linkProps} />
}
