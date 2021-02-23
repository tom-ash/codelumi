function announcementShowMetaDataImageParser({ image }) {
  const { imageKey } = image
  
  return `${AWS_S3_URL}/${imageKey}`
}

export default announcementShowMetaDataImageParser
