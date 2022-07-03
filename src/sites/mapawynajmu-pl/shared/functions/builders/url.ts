import clientUrl from '../../constants/urls/client.js'
import buildUrlGeneric from '../../../../shared/shared/functions/routes/builders/url'

type buildUrlProps = {
  path: string,
  query?: string,
  fragment?: string
}

function buildUrl(props: buildUrlProps) {
  const {
    path,
    query,
    fragment
  } = props

  return buildUrlGeneric({ clientUrl, path, query, fragment })
}

export default buildUrl
