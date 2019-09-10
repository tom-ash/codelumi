import { parameters } from '../../../../index/constants/parameters'

export function readParams() {
  const { changeControl, changeInputs } = this.props
  const urlParams = window.location.search.replace('?', '').split('&')
  const stateParams = {}
  urlParams.map(urlParam => {
    const parameterArray = urlParam.split('=')
    const param = parameters.find(parameter => (
      parameter.polish === parameterArray[0] || parameter.english === parameterArray[0])
    )
    if (param) {
      stateParams[param.state] = param.stateValue(parameterArray[1])
    }
  })
  changeInputs(stateParams)
  changeControl({
    readParams: false,
    fetch: true
  })
}