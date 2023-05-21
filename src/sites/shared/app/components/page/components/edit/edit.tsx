import React, { useEffect } from 'react'
import { useStore } from '../../../../functions/store/useStore'
import { PageTile } from '../shared/components/tile/tile'
import { OnlineSwitch } from './components/online/online-switch'
import { BodyTextarea } from './components/body/body.textarea'
import { Meta } from './components/meta/meta'
import { Schema } from './components/schema/schema'
import { UpdateStatus } from './components/update-status/update-status'
import { UpdatePageButton } from './components/update-page/update-page-button'
import { IndexNowButton } from './components/index-now/index-now-button'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'

const PageCreate = () => {
  useStyles(styles)

  const { state, dispatch } = useStore()
  const { control, inputs } = state
  const { nav } = control
  const { body } = inputs
  const setControl = (value: any) => dispatch({ type: 'control', value })
  const setData = (value: any) => dispatch({ type: 'data', value })

  useEffect(() => {
    const parsedBody = (() => {
      try {
        return JSON.parse(body)
      } catch {
        return []
      }
    })()

    setData({ body: parsedBody })
  }, [body])

  return (
    <div id='page-edit'>
      <PageTile />
      <div id='edit-panel'>
        <nav>
          <div onClick={() => setControl({ nav: 'body' })}>Body</div>
          <div onClick={() => setControl({ nav: 'meta' })}>Meta</div>
          <div onClick={() => setControl({ nav: 'schema' })}>Schema</div>
        </nav>
        <form className={nav}>
          {nav === 'body' && <BodyTextarea />}
          {nav === 'meta' && <Meta />}
          {nav === 'schema' && <Schema />}
        </form>
        <UpdatePageButton />
        <UpdatePageButton exitOnSave={true} />
        <IndexNowButton />
        <UpdateStatus />
        <OnlineSwitch />
      </div>
    </div>
  )
}

export default PageCreate
