import { parameters } from '../constants/parameters'

export function buildRequestParameters() {
  let params = '?'
  
  parameters.map(parameter => {
    if (this.props[parameter.state] !== '' && this.props[parameter.state] !== undefined) {
      params += `${parameter.api}=${this.props[parameter.state]}&`
    }
  })
  return params.slice(0, -1)
}
