export function containerClassHandler() {
  let error = ''
  if (this.props.termsError || this.props.privacyError) {
    error = ' with-error'
  }
  return `checkbox-container${error}`
}