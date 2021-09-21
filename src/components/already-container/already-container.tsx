import { Component, Host, h, ComponentInterface, Element } from '@stencil/core';
import { updateCSSVariable } from '../../utils/update-css-variable';
import { viewBreakpoints, wrappedViewBreakpoints } from "../../utils/view-breakpoints";

@Component({
  tag: 'already-container',
  styleUrl: 'already-container.css',
  shadow: true,
})
export class AlreadyContainer implements ComponentInterface {

  @Element() hostElement: HTMLAlreadyContainerElement;

  connectedCallback() {
    this.initializeResizeHandler();
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

  private initializeResizeHandler() {
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        const width = entry.contentRect.width;
        if (width >= viewBreakpoints.xxl) {
          updateCSSVariable('--content-max-width', `${wrappedViewBreakpoints.xxl}px`, this.hostElement);
        } else if (width >= viewBreakpoints.xl) {
          updateCSSVariable('--content-max-width', `${wrappedViewBreakpoints.xl}px`, this.hostElement);
        } else if (width >= viewBreakpoints.lg) {
          updateCSSVariable('--content-max-width', `${wrappedViewBreakpoints.lg}px`, this.hostElement);
        } else if (width >= viewBreakpoints.md) {
          updateCSSVariable('--content-max-width', `${wrappedViewBreakpoints.md}px`, this.hostElement);
        } else if (width >= viewBreakpoints.sm) {
          updateCSSVariable('--content-max-width', `${wrappedViewBreakpoints.sm}px`, this.hostElement);
        } else {
          updateCSSVariable('--content-max-width', `100%`, this.hostElement);
        }
      }
    });
    resizeObserver.observe(this.hostElement);
  }

}
