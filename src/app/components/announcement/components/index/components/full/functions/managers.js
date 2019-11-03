import { scrollToElement } from '../../../../../../../functions/scrollers/scroll-to-element'
import { instantScroll } from '../../../../../../../functions/scrollers/instant-scroll'

const id = 'announcement-index-full-search-button'

export function buttonManager(action) {
  const { changeControl, changeData } = this.props
  return {
    id: id,
    classNames: { container: 'simple-index-input button' },
    label: this.buttonLabelHandler(),
    onClick: () => {
      const button = document.getElementById(id)
      changeData({ announcements: [] })
      scrollToElement(button, 4, 50, () => changeControl({
        fetchList: true,
        showList: true
      }))
      this.paramsBuilder()
    }
  }
}

export function paginationManager() {
  const { connecting, page, listAmount, changeControl } = this.props
  return {
    classNames: { container: 'pagination' },
    current: +page,
    resultsPerPage: 24,
    resultAmount: +listAmount,
    onClick: (button) => {
      if (connecting) return
      const scrollButton = document.getElementById(id)
      instantScroll(window.pageYOffset + scrollButton.getBoundingClientRect().top)
      changeControl({
        page: button,
        fetchList: true
      })
    }
  }
}
