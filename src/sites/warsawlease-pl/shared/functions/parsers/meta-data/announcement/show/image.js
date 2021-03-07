import AWS_S3_URL from '../../../../../../shared/constants/urls/aws-s3.js'

function announcementShowMetaDataImageParser({ image }) {
  const { imageKey } = image
  
  return `${AWS_S3_URL}/${imageKey}`
}

export default announcementShowMetaDataImageParser
