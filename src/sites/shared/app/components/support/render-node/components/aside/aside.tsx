import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import Section from '../section/section'

const Aside = (props: AsideProps) => {
  useStyles(styles)

  const { node, appName, jsonBody, clientUrl, device, lang, langHandler, sectionBody, placing } = props

  const nodeProps = {
    node,
    jsonBody,
    clientUrl,
    appName,
    device,
    lang,
    langHandler,
    sectionBody,
  }

  return (
    <aside className={placing}>
      <Section {...nodeProps} />
    </aside>
  )
}

export default Aside
