import elementResizeEvent, { unbind } from 'element-resize-event'

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
  const { width } = this.state
  const container = this.container.current

  const containerWidth = container.getBoundingClientRect().width
  this.setState({ width: containerWidth })

  this.slider.current.addEventListener('touchmove', this.onTouchMoveHandler)
  elementResizeEvent(container, () => {
    const newContainerWidth = container.getBoundingClientRect().width
    if (width === newContainerWidth) return

    this.setState({ width: newContainerWidth })
  })
}

export function componentDidUpdate(prevProps, prevState) {
  this.onDragHandler(prevState)
}

export function componentWillUnmount() {
  const container = this.container.current

  unbind(container)
}
