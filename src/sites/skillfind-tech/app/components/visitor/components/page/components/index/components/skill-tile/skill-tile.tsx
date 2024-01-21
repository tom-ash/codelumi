import React from 'react'
import { SVG } from '../../../../../../../../../../shared/app/components/support/svg/svg';
import { Link } from '../../../../../../../../../../shared/app/components/support/link/link';
import Image from '../../../../../../../../../../shared/app/components/support/image/image'

interface SkillTileInterface {
  (props: {
    title: string;
    href: string;
    hrefLang: Lang;
    description: string;
    pageCount: number;
    questionCount: number;
    image?: string;
  }): React.ReactElement
}

export const SkillTile: SkillTileInterface = (props) => {
  const {
    title,
    href,
    hrefLang,
    description,
    pageCount,
    questionCount,
    image,
  } = props

  const label = (
    <div>
      <div className='image'>
        {image && <Image
          src={image}
          alt={title}
        />}
      </div>
      <div className='title'>{title}</div>
      <div className='description'>{description}</div>
      {/* <div className='counts'>
        <div className='page-count'>
          <SVG name='collegeCap' /> {pageCount} tutorial pages
        </div>
        <div className='question-count'>
          <SVG name='flaskVial' /> {questionCount} practice problems
        </div>
      </div> */}
    </div>
  )

  const linkProps = {
    label,
    href,
    hrefLang,
    customClassNames: 'skill',
  }

  return <Link {...linkProps} />
}
