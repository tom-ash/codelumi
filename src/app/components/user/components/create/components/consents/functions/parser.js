import { consents } from '../constants/consents'

export function parser(userObject) {
  let timeNow = new Date()
  timeNow.setHours(timeNow.getHours() - timeNow.getTimezoneOffset()/60)
  timeNow = timeNow.toJSON().slice(0,19)
  userObject.terms = {
    value: 'granted',
    language: this.props.language,
    time: timeNow,
    version: 'TODO: VERSION',
    text: consents[this.props.language]
  }
  userObject.privacy = {
    value: 'granted',
    language: this.props.language,
    time: timeNow,
    version: 'TODO: VERSION',
    text: consents[this.props.language]
  }
}