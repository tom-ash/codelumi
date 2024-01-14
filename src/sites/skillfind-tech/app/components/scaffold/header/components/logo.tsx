import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { Link } from '../../../../../../shared/app/components/support/link/link'
import SkillFindTechLogo from './image/image'

interface LogoInterface {
  (props: {}): JSX.Element
}

export const Logo: LogoInterface = props => {
  useStyles(styles)

  const storageUrlRandomizedQuaryParameter = Math.random()

  const label = (
    <div className='text'>
      <SkillFindTechLogo />
      skillfind.<span className='tech'>tech</span>
    </div>
  )

  const linkProps = {
    linkKey: 'root',
    label,
    customClassNames: 'logo',
  }

  return <Link {...linkProps} />
}
