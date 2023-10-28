import React from 'react'
import Image from '../image/image'
import { Heading } from '../../../../../../../mapawynajmu-pl/app/components/support/components/heading'
import { useData } from '../../../../../functions/store/use-data'
import { Author } from '../../../author/author'

interface ArticleHeaderInterface {
  (props: {
    useCoverImage?: boolean
  }): React.ReactElement
}

const ArticleHeader: ArticleHeaderInterface = (props) => {
  const { useCoverImage = true } = props
  const { coverImage, title } = useData()

  const imageProps = {
    src: coverImage,
    alt: title,
  }

  const headingProps = {
    tier: 1,
    text: title,
  }

  return (
    <header>
      {useCoverImage && <Image {...imageProps} />}
      <Heading {...headingProps} />
      <Author />
    </header>
  )
}

export default ArticleHeader
