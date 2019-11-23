import { parameters } from '../constants/parameters'

export function buildRequestParameters() {
  let params = '?'

  if (this.userIndex()) {
    params += `type=list&offset=${this.props.offset}&`;
    (['offices', 'usablePremises', 'visible', 'hidden']).map(parameter => {
      params += `${parameter}=${this.props.switches[parameter]}&`
    })
    params += `sort=${this.props.sort}&`
  } else {
    parameters.map(parameter => {
      if (this.props[parameter.state] !== '' && this.props[parameter.state] !== undefined) {
        params += `${parameter.api}=${this.props[parameter.state]}&`
      }
    })
  }

  return params.slice(0, -1)
}
