
function handleScroll() {
  const {
    indexFullFarthestScrollTop,
    changeControl
  } = this.props

  const scrollTop = window.scrollY

  if (scrollTop > indexFullFarthestScrollTop + 100) {
    changeControl({ indexFullFarthestScrollTop: scrollTop })
  }
}

export function componentDidMount() {
  window.addEventListener('scroll', () => handleScroll.apply(this))
}
