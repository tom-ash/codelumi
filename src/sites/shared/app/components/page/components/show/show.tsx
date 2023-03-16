import React from 'react'
import { useStore } from '../../../../functions/store/useStore'
import { PageTile } from '../shared/components/tile/tile'
import { changeUrl } from '../../../../functions/routes/changers/change-url'

const PageShow = () => {
  const { state: {
    links,
    user: {
      role
    }
  } } = useStore()

  const isAdmin = role === 'admin'

  const changePage = () => {
    const href = links['page/edit'].path

    changeUrl({ href })
  }

  return (
    <>
      <PageTile />
      {isAdmin && (
        <button
          className={'page-edit'}
          onClick={changePage}
        />
      )}
    </>
  )
}

export default PageShow
