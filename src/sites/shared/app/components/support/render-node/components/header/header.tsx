import React from 'react'
import { useStore } from '../../../../../functions/store/useStore'
import Image from '../image/image'
import { Heading } from '../../../../../../../mapawynajmu-pl/app/components/support/components/heading'

const Header = () => {
  const { state } = useStore()
  const { data } = state
  const { coverImage, title } = data

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
