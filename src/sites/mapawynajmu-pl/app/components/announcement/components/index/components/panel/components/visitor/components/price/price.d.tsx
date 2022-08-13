interface PriceProps {
  showPricePanel: boolean
  priceMin: number
  priceMinInput: number
  priceMax: number
  priceMaxInput: number
  changeControl: ChangeControl
  changeData(): void
  changeInputs(): void
}

type ChangeControl = (args: { showPricePanel: boolean, rebuildQueryParams?: boolean }) => void

interface ChangeInputs {
  (args: {
    [key: string]: string | number
  }): void
}
