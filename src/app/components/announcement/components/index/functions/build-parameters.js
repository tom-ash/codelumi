import { parameters } from '../constants/parameters'

export function buildparams() {
  let params = '?'
  parameters.map(parameter => {
    if (this.props[parameter.state] !== '' && this.props[parameter.state] !== undefined) {
      params += `${this.languageHandler(parameter.polish, parameter.english)}=${parameter.value.call(this, this.props[parameter.state])}&`
    }
  })
  return params.slice(0, -1)
}

export function buildRequestParameters() {
  let params = '?'
  
  parameters.map(parameter => {
    if (this.props[parameter.state] !== '' && this.props[parameter.state] !== undefined) {
      params += `${parameter.api}=${this.props[parameter.state]}&`
    }
  })
  return params.slice(0, -1)
}