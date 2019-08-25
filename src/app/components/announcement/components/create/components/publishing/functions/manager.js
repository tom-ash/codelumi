import { managerAgent } from 'managed-inputs'

export function buttonManager(action) {
  return managerAgent(action, {
    classNames: { container: 'form-input button' },
    label: this.languageHandler('Dodaj ogłoszenie', 'Add announcement'),
    onClick: () => this.publish()
  })
}