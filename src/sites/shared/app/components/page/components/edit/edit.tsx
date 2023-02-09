import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { ManagedText, ManagedTextarea, ManagedButton } from 'managed-inputs'
import * as managers from './functions/managers'
import { save } from './functions/save'
import withStyles from 'isomorphic-style-loader-react18/withStyles'
import styles from './styles/styles.scss'
import PageTile from '../shared/components/tile/tile'
import OnlineInput from './inputs/online'
import HeaderAutonumberingInput from './inputs/header-auto-numbering'
import UpdateStatus from './components/update-status'
import Schema from './components/schema/schema'
import Meta from './components/meta/meta'

interface PageCreateProps {
  routeSynced: boolean
  online: boolean
  headerAutonumbering: boolean
  setControl(args: object): void
  setInputs(): void
  setData(): void
  updated: boolean
  nav: string
  schemaMode: string
  autoSchema: string
  manualSchema: string
  publishedOn: string
  modifiedOn: string
  category: string
  subcategory: string
  pageLang: string
  langAltsGroup: string
}

class PageCreate extends React.Component<PageCreateProps> {
  urlManager: () => object
  bodyManager: () => void
  titleManager: () => void
  descriptionManager: () => void
  keywordsManager: () => void
  canonicalUrlManager: () => object
  pictureManager: () => void
  saveManager: () => void
  saveAndShowManager: () => void
  save: () => void

  constructor(props: PageCreateProps) {
    super(props)
    this.urlManager = managers.urlManager.bind(this)
    this.bodyManager = managers.bodyManager.bind(this)
    this.titleManager = managers.titleManager.bind(this)
    this.descriptionManager = managers.descriptionManager.bind(this)
    this.keywordsManager = managers.keywordsManager.bind(this)
    this.canonicalUrlManager = managers.canonicalUrlManager.bind(this)
    this.pictureManager = managers.pictureManager.bind(this)
    this.saveManager = managers.saveManager.bind(this)
    this.saveAndShowManager = managers.saveAndShowManager.bind(this)
    this.save = save.bind(this)
  }

  render() {
    const {
      routeSynced,
      online,
      headerAutonumbering,
      setControl,
      setInputs,
      updated,
      nav,
      schemaMode,
      autoSchema,
      manualSchema,
      publishedOn,
      modifiedOn,
      category,
      subcategory,
      pageLang,
      langAltsGroup,
    } = this.props

    if (!routeSynced) return null

    const tileProps = {
      ...this.props,
      renderEdit: true,
      updatePage: this.save,
    }
    const updateStatusProps = { updated }
    const schemaProps = {
      schemaMode,
      autoSchema,
      manualSchema,
      setInputs,
    }
    const metaProps = {
      publishedOn,
      modifiedOn,
      setInputs,
      category,
      subcategory,
      pageLang,
      langAltsGroup,
    }

    return (
      <div id='page-edit'>
        <PageTile {...tileProps} />
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
                <ManagedText {...this.urlManager()} />
                <ManagedText {...this.canonicalUrlManager()} />
              </>
            )}

            {nav === 'controls' && (
              <>
                <OnlineInput
                  checked={online}
                  setInputs={setInputs}
                />
                <HeaderAutonumberingInput
                  checked={headerAutonumbering}
                  setInputs={setInputs}
                />
              </>
            )}

            {nav === 'body' && (
              <>
                {/* @ts-ignore */}
                <ManagedTextarea {...this.bodyManager()} />
              </>
            )}

            {nav === 'meta' && (
              <>
                <Meta {...metaProps} />
                {/* @ts-ignore */}
                <ManagedText {...this.titleManager()} />
                {/* @ts-ignore */}
                <ManagedTextarea {...this.descriptionManager()} />
                {/* @ts-ignore */}
                <ManagedTextarea {...this.keywordsManager()} />
                {/* @ts-ignore */}
                <ManagedText {...this.pictureManager()} />
              </>
            )}

            {nav === 'schema' && <Schema {...schemaProps} />}
          </form>
          {/* @ts-ignore */}
          <ManagedButton {...this.saveManager()} />
          {/* @ts-ignore */}
          <ManagedButton {...this.saveAndShowManager()} />
          <UpdateStatus {...updateStatusProps} />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PageCreate))
