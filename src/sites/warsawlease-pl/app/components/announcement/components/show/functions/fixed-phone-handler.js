export function fixedPhoneHandler() {
  if (typeof window === 'undefined') return
  
  if (window.scrollY > showcase.offsetTop + showcase.offsetHeight - 64 &&
    window.scrollY + window.innerHeight < footer.offsetTop) {
    if (this.props.showFixedPhone) return
    this.props.changeControl({ showFixedPhone: true })
  } else {
    if (!this.props.showFixedPhone) return
    this.props.changeControl({ showFixedPhone: false })
  }
}