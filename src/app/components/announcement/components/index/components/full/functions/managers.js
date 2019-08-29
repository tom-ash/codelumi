import { managerAgent } from 'managed-inputs'
import { scrollToElement } from '../../../../../../../functions/scrollers/scroll-to-element'

const id = 'announcement-index-full-search-button'

export function buttonManager(action) {
  return managerAgent(action, {
    id: id,
    classNames: { container: 'simple-index-input button' },
    label: this.buttonLabelHandler(),
    onClick: () => {
      const button = document.getElementById(id)
      scrollToElement(button, 6, -18)
      this.props.changeControl({ searchInitiated: true })
      this.props.changeControl({ fetch: true, page: 1, searchInitiated: true })
    }
  })
}

export function paginationManager(aspect, button) {
  return managerAgent(aspect, {
    classNames: { container: 'pagination' },
    current: +this.props.page,
    resultsPerPage: 24,
    resultAmount: +this.props.amount,
    onClick: () => {
      if (this.props.connecting) return
      const scrollButton = document.getElementById(id)
      scrollToElement(scrollButton, 24)
      window.setTimeout( () => this.props.changeControl({ page: button, fetch: true }), 512)
    }
  })
}