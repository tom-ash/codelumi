import React from 'react'
import { viewAnnouncement } from '../../../../../announcement/functions/view-announcement'
import scrollToElement from '../../../../../../../../shared/app/functions/screen/scrollers/to-element'
import AWS_S3_URL from '../../../../../../../shared/constants/urls/aws-s3'

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
}

const Link = (props: LinkProps) => {
  const {
    id,
    path,
    title,
    lat,
    lng,
    isMobile,
    changeData,
    pictures
  } = props

  const src = `${AWS_S3_URL}/announcements/${id}/${pictures[0].database}`
  const imgProps = { src, alt: title, className: 'root-list-img' }

  return (
    <a
      href={path}
      title={title}
      target='_blank'
      className='root-list-link'
      onMouseOver={() => {
        const pin = document.getElementById(`googl-map-pin-${id}`)

        if (pin) pin.classList.add('focused')
      }}
      onMouseLeave={() => {
        const pin = document.getElementById(`googl-map-pin-${id}`)
        if (pin) pin.classList.remove('focused')
      }}
      onClick={e => {
        e.preventDefault()
        // @ts-ignore
        const map = window.googleMap
        const options = { center: { lat, lng }, zoom: 12.4 }
        map.setOptions(options)
        viewAnnouncement(id)

        if (!isMobile) return changeData({ tileId: id })

        scrollToElement(document.getElementById('google-map'), 5, -64)
      }}
    >
      <img {...imgProps} />
    </a>
  )
}

export default Link
