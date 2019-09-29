export function buttonManager() {
  return {
    classNames: { container: 'form-input button' },
    label: this.languageHandler('Dodaj ogłoszenie', 'Add announcement'),
    onClick: () => this.publish()
  }
}