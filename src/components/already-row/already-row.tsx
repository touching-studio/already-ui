import { Component, Host, h, ComponentInterface, Element } from '@stencil/core';

@Component({
  tag: 'already-row',
  styleUrl: 'already-row.css',
  shadow: true,
})
export class AlreadyRow implements ComponentInterface {
  
  @Element() hostElement: HTMLAlreadyRowElement;

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
        this.hostElement.querySelectorAll('already-col').forEach(colElement => colElement.rowWidthChanged(width));
      }
    });
    resizeObserver.observe(this.hostElement);
  }

}
