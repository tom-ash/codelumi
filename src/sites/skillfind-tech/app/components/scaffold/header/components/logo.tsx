import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { Link } from '../../../../../../shared/app/components/support/link/link'

interface LogoInterface {
  (props: {}): JSX.Element
}

export const Logo: LogoInterface = props => {
  useStyles(styles)

  const storageUrlRandomizedQuaryParameter = Math.random()

  const label = (
    <div className='text'>
      <img
        crossOrigin='anonymous'
        loading='lazy'
        src={`https://soundofit-dev.s3.eu-central-1.amazonaws.com/qweqweqw.jpeg?a=123?a=${storageUrlRandomizedQuaryParameter}`}
      />
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
