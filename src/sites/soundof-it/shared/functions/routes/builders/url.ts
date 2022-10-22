import clientUrl from '../../../constants/urls/client.js'
import buildUrlGeneric from '../../../../../shared/shared/functions/routes/builders/url'

const buildUrl: BuildUrl = function (props) {
  const { path, query, fragment } = props

  return buildUrlGeneric({ clientUrl, path, query, fragment })
}

export default buildUrl
