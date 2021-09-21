export function updateCSSVariable(name: string, value: string, element: HTMLElement) {
  element?.style.setProperty(name, value);
}
