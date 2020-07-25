export function getDerivedStateFromProps(props, state) {
  const { pictures } = props
  
  if (pictures === null || pictures.length === 0) return {}

  if (state.statePictures.length === 0) {
    return {
      statePictures: [pictures[0]].concat(Array.apply(null, Array(pictures.length - 1)).map(() => ({})))
    }
  }

  return {}
}

export function componentDidMount() {
  const {
    heightQuantifier
  } = this.props

  const width = this.container.current.getBoundingClientRect().width
  this.container.current.style.height = `${width / (heightQuantifier || 1.7777)}px`
  this.setState({ width })

  this.slider.current.addEventListener('touchmove', this.onTouchMoveHandler)
}

export function componentDidUpdate(prevProps, prevState) {
  this.onDragHandler(prevState)
}
