import React, { useContext} from 'react'
import { viewAnnouncement } from '../../../../../announcement/functions/view-announcement'
import AWS_S3_URL from '../../../../../../../shared/constants/urls/aws-s3'
import buildUrl from '../../../../../../../shared/functions/builders/url'
import AppContext from '../../../../../../constants/context'

interface LinkProps {
  id: number
  path: string
  title: string
  lat: number
  lng: number
  isMobile: boolean
  changeData(attrs: object): void
  pictures: {
    database: string
  }[]
  changeCurrentTileId(id: number): void
}

const Link = (props: LinkProps) => {
  const {
    id,
    path,
    title,
    lat,
    lng,
    pictures,
    changeCurrentTileId,
  } = props

  const src = `${AWS_S3_URL}/announcements/${id}/${pictures[0].database}`
  const imgProps = { src, alt: title, className: 'root-list-img' }

  const { changeRoute } = useContext(AppContext)

  return (
    <a
      href={path}
      title={title}
      target='_blank'
      className='root-list-link'
      onClick={e => {
        changeCurrentTileId(id)
        e.preventDefault()
        const href = buildUrl({ path })
        changeRoute({ href })

        // @ts-ignore
        const map = window.googleMap
        const options = { center: { lat, lng }, zoom: 12.4 }
        map.setOptions(options)
        viewAnnouncement(id)
      }}
    >
      <img {...imgProps} />
    </a>
  )
}

export default Link
