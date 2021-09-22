import { Component, Host, h, ComponentInterface, Element } from '@stencil/core';
import { observeResize } from '../../utils/observe-resize';

@Component({
  tag: 'already-row',
  styleUrl: 'already-row.css',
  shadow: true,
})
export class AlreadyRow implements ComponentInterface {
  
  @Element() hostElement: HTMLAlreadyRowElement;

  connectedCallback() {
    observeResize.call(
      this,
      this.hostElement,
      [
        this.notifyWidthChangeToColElements
      ]
    )
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

  private notifyWidthChangeToColElements(entry: ResizeObserverEntry) {
    const width = entry.contentRect.width;
    this.hostElement.querySelectorAll('already-col').forEach(colElement => colElement.rowWidthChanged(width));
  }
}
