import React from 'react'
import ManagedSlider from '../../../../../../support/components/managed-slider/managed-slider'
import { ManagedLink } from 'managed-inputs'
import { getDerivedStateFromProps } from './functions/get-derived-state-from-props'
import SVG from '../../../../../../support/components/svg/svg'

class AnnouncementShowPictures extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pictures: [],
    }
  }

  static getDerivedStateFromProps = getDerivedStateFromProps

  render() {
    const { disableSLides, heightQuantifier, venue, title } = this.props

    const { pictures } = this.state

    if (pictures.length === 0 && venue === 'show') return null
    if (pictures.length === 0) return <ManagedLink {...this.linkManager()} />

    const Chevron = () => <SVG name='chevron' />

    return (
      <div className='pictures'>
        <ManagedSlider
          pictures={pictures}
          disableSLides={disableSLides}
          heightQuantifier={heightQuantifier}
          chevronLeft={<Chevron />}
          chevronRight={<Chevron />}
          title={title}
        />
      </div>
    )
  }
}

export default AnnouncementShowPictures
