import { managerAgent } from 'managed-inputs'
import { scrollToElement } from '../../../../../../../functions/scrollers/scroll-to-element'
import { instantScroll } from '../../../../../../../functions/scrollers/instant-scroll'

const id = 'announcement-index-full-search-button'

export function buttonManager(action) {
  const { changeControl, changeData } = this.props
  return managerAgent(action, {
    id: id,
    classNames: { container: 'simple-index-input button' },
    label: this.buttonLabelHandler(),
    onClick: () => {
      const button = document.getElementById(id)
      changeData({ announcements: [] })
      scrollToElement(button, 6, -18, () => changeControl({
        fetchList: true,
        showList: true
      }))
      this.paramsBuilder()
    }
  })
}

export function paginationManager(aspect, button) {
  const { connecting, page, listAmount, changeControl } = this.props
  return managerAgent(aspect, {
    classNames: { container: 'pagination' },
    current: +page,
    resultsPerPage: 24,
    resultAmount: +listAmount,
    onClick: () => {
      if (connecting) return
      const scrollButton = document.getElementById(id)
      instantScroll(window.pageYOffset + scrollButton.getBoundingClientRect().top)
      changeControl({
        page: button,
        fetchList: true
      })
    }
  })
}
