import { managerAgent } from 'managed-inputs'
import { scrollToElement } from '../../../../../../../functions/scrollers/scroll-to-element'

const id = 'announcement-index-full-search-button'

export function buttonManager(action) {
  const { changeControl } = this.props
  return managerAgent(action, {
    id: id,
    classNames: { container: 'simple-index-input button' },
    label: this.buttonLabelHandler(),
    onClick: () => {
      const button = document.getElementById(id)
      scrollToElement(button, 6, -18)

      this.paramsBuilder()

      changeControl({
        fetch: true,
        showList: true,
        page: 1
      })
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
      scrollToElement(scrollButton, 24)
      window.setTimeout(() => changeControl({ page: button, fetch: true }), 512)
    }
  })
}