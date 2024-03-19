export interface PinBuilder {
  (props: any): {
    id: number
    latitude: number
    longitude: number
    htmlContent: string
    className: string
    href: string
  }
}
