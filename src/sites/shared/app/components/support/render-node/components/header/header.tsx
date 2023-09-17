import React from 'react'
import Image from '../image/image'
import { Heading } from '../../../../../../../mapawynajmu-pl/app/components/support/components/heading'
import { useData } from '../../../../../functions/store/use-data'

const Header = () => {
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
      <Image {...imageProps} />
      <Heading {...headingProps} />
    </header>
  )
}

export default Header
