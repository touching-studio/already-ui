import { Component, Host, h, ComponentInterface, Element } from '@stencil/core';
import { observeResize } from '../../utils/observe-resize';
import { updateCSSVariable } from '../../utils/update-css-variable';

@Component({
  tag: 'already-container',
  styleUrl: 'already-container.css',
  shadow: true,
})
export class AlreadyContainer implements ComponentInterface {

  @Element() hostElement: HTMLAlreadyContainerElement;

  connectedCallback() {
    observeResize.call(
      this,
      this.hostElement,
      [
        this.updateContentMaxWidthForViewBreakpoint
      ]
    );
  }

  render() {
    return (
      <Host>
        <div>
          <slot></slot>
        </div>
      </Host>
    );
  }

  private updateContentMaxWidthForViewBreakpoint(entry: ResizeObserverEntry) {
    const width = entry.contentRect.width;
    switch (true) {
      case (width >= this.getViewBreakpoint('xxl')):
        updateCSSVariable('--content-max-width', `${this.getWrappedViewBreakpoint('xxl')}px`, this.hostElement);
        break;
      case (width >= this.getViewBreakpoint('xl')):
        updateCSSVariable('--content-max-width', `${this.getWrappedViewBreakpoint('xl')}px`, this.hostElement);
        break;
      case (width >= this.getViewBreakpoint('lg')):
        updateCSSVariable('--content-max-width', `${this.getWrappedViewBreakpoint('lg')}px`, this.hostElement);
        break;
      case (width >= this.getViewBreakpoint('md')):
        updateCSSVariable('--content-max-width', `${this.getWrappedViewBreakpoint('md')}px`, this.hostElement);
        break;
      case (width >= this.getViewBreakpoint('sm')):
        updateCSSVariable('--content-max-width', `${this.getWrappedViewBreakpoint('sm')}px`, this.hostElement);
        break;
      default:
        updateCSSVariable('--content-max-width', `100%`, this.hostElement);
    }
  }

  private getViewBreakpoint(name: string) {
    return +getComputedStyle(this.hostElement).getPropertyValue(`--${name}`);
  }

  private getWrappedViewBreakpoint(name: string) {
    return +getComputedStyle(this.hostElement).getPropertyValue(`--wrapped-${name}`);
  }

}
