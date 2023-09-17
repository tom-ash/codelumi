import React from 'react'
import { PageTile } from '../shared/components/tile/tile'
import { changeUrl } from '../../../../functions/routes/changers/change-url'
import { useLinks } from '../../../../functions/store/use-links'
import { useUser } from '../../../../functions/store/use-user'

const PageShow = () => {
  const links = useLinks()
  const { role } = useUser()

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
