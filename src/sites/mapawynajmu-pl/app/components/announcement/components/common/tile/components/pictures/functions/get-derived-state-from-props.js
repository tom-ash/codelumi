import AWS_S3_URL from '../../../../../../../../../shared/constants/urls/aws-s3.js'

export function getDerivedStateFromProps(props, state) {
  const { pictures, id } = props

  if (pictures === undefined || pictures === null || pictures.length === 0) return {}

  if (state.pictures.length === 0) {
    return {
      pictures: pictures.map(picture => ({
        database: `${AWS_S3_URL}/announcements/${id}/${picture.database}`,
      })),
    }
  }

  return {}
}
