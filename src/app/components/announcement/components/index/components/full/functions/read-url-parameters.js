import { parameters } from '../../../../index/constants/parameters'

export function readUrlParameters() {
  const urlParameters = window.location.search.replace('?', '').split('&')
  const stateParameters = { parametersRead: true }
  urlParameters.map(urlParameter => {
    const parameterArray = urlParameter.split('=')
    const stateParameter = parameters.find(parameter => parameter.polish === parameterArray[0] ||
                                                        parameter.english === parameterArray[0])
    if (stateParameter) {
      stateParameters[stateParameter.state] = stateParameter.stateValue(parameterArray[1])
    }
  })
  this.props.changeInputs({ ...stateParameters })
  this.props.changeControl({ fetch: true })
}