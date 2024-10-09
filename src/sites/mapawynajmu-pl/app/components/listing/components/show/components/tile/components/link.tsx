import React from 'react'
import AWS_S3_URL from '../../../../../../../../shared/constants/urls/aws-s3'

interface LinkProps {
  id: number
  title: string
  lat: number
  lng: number
  isMobile: boolean
  setData(attrs: object): void
  pictures: {
    database: string
  }[]
}

const Link = (props: LinkProps) => {
  const { id, title, pictures } = props

  const src = `${AWS_S3_URL}/announcements/${id}/${pictures[0].database}`
  const imgProps = { src, alt: title, className: 'root-list-img' }

  return <img {...imgProps} />
}

export default Link
