import React from 'react'
import { useStore } from '../../../../functions/store/useStore'
// import { PageTile } from '../shared/components/tile/tile'
import { UrlInput } from './components/url/url.input'
import { CanonicalUrlInput } from './components/canonical-url/canonical-url.input'
import { OnlineSwitch } from './components/online/online-switch'
import { BodyTextarea } from './components/body/body.textarea'
import { Meta } from './components/meta/meta'
import { Schema } from './components/schema/schema'
import { UpdateStatus } from './components/update-status/update-status'
import { UpdatePageButton } from './components/update-page/update-page-button'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'

const PageCreate = () => {
  useStyles(styles)

  const { state, dispatch } = useStore()
  const { control } = state
  const { nav } = control

  const setControl = (value: any) => dispatch({ type: 'control', value })

  return (
    <div id='page-edit'>
      {/* <PageTile /> */}
      <div id='edit-panel'>
        <nav>
          <div onClick={() => setControl({ nav: 'urls' })}>URLs</div>
          <div onClick={() => setControl({ nav: 'controls' })}>Controls</div>
          <div onClick={() => setControl({ nav: 'body' })}>Body</div>
          <div onClick={() => setControl({ nav: 'meta' })}>Meta</div>
          <div onClick={() => setControl({ nav: 'schema' })}>Schema</div>
        </nav>
        <form className={nav}>
          {nav === 'urls' && (
            <>
              <UrlInput />
              <CanonicalUrlInput />
            </>
          )}
          {nav === 'controls' && (
            <>
              <OnlineSwitch />
            </>
          )}
          {nav === 'body' && <BodyTextarea />}
          {nav === 'meta' &&  <Meta />}
          {nav === 'schema' && <Schema />}
        </form>
        <UpdatePageButton />
        <UpdateStatus />
      </div>
    </div>
  )
}

export default PageCreate
