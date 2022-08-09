interface PriceProps {
  showPricePanel: boolean
  priceMin: number
  priceMinInput: number
  priceMax: number
  priceMaxInput: number
  changeControl(props: { showPricePanel: boolean }): void
  changeData(): void
  changeInputs(): void
}
