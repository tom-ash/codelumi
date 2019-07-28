import { parameters } from '../constants/parameters'

export function buildUrlParameters() {
  let urlParameters = '?'
  parameters.map(parameter => {
    if (this.props[parameter.state] !== '' && this.props[parameter.state] !== undefined) {
      urlParameters += `${this.languageHandler(parameter.polish, parameter.english)}=${parameter.value.call(this, this.props[parameter.state])}&`
    }
  })
  return urlParameters.slice(0, -1)
}

export function buildRequestParameters() {
  let urlParameters = '?'
  parameters.map(parameter => {
    if (this.props[parameter.state] !== '' && this.props[parameter.state] !== undefined) {
      urlParameters += `${parameter.api}=${this.props[parameter.state]}&`
    }
  })
  return urlParameters.slice(0, -1)
}