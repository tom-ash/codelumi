export function paginationManager() {
  if (typeof window === 'undefined') return
  
    const { connecting, offset, amount, changeControl } = this.props
    return {
      classNames: { container: 'pagination' },
      current: (offset / 50) + 1,
      resultsPerPage: 50,
      resultAmount: amount,
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