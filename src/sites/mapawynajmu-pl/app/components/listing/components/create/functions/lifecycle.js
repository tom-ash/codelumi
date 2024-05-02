import createAnnouncement from './create-announcement'

export function componentDidUpdate(prevProps) {
  const { step: prevStep } = prevProps
  const { step } = this.props

  if (prevStep !== 'publishing' && step === 'publishing') {
    createAnnouncement.call(this)
  }
}
