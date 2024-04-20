import React from 'react'
import { useLinks } from '../../../../../../../../shared/app/functions/store/use-links';
import { changeUrl } from '../../../../../../../../shared/app/functions/routes/changers/change-url';
import { Link } from '../../../../../../../../shared/app/components/support/link/link';

interface GoBackInterface {
  (props: {}): React.ReactElement;
}

export const GoBack: GoBackInterface = () => {
  const { 
    root: {
      href,
      hrefLang,
      title,
    }
  } = useLinks()

  return (
    <Link
      customClassNames='go-back'
      href={href}
      hrefLang={hrefLang}
      title={title}
      label='GO BACK'
    />
  )
}
