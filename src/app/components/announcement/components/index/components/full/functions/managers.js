import { managerAgent } from 'managed-inputs'
import { scrollToElement } from '../../../../../../../functions/scroll-to-element'

export function buttonManager(action) {
  return managerAgent(action, {
    classNames: { container: 'simple-index-input button' },
    label: this.buttonLabelHandler(),
    onClick: () => {
      this.props.changeControl({ searchInitiated: true })
      // if (!this.props.changed) return
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
      scrollToElement(document.getElementById('announcement-index-full-scroll-anchor'), 256)
      window.setTimeout( () => this.props.changeControl({ page: button, fetch: true }), 512)
    }
  })
}