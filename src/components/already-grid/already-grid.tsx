import { Component, Host, h, ComponentInterface, Prop, Element, Watch } from '@stencil/core';
import { updateCSSVariable } from '../../utils/update-css-variable';

@Component({
  tag: 'already-grid',
  styleUrl: 'already-grid.css',
  shadow: true,
})
export class AlreadyGrid implements ComponentInterface {
  
  @Element() hostElement: HTMLAlreadyGridElement;

  @Prop({ reflect: true }) baseColumnCount = 12;

  @Watch('baseColumnCount')
  baseColumnCountChanged(value: number) {
    updateCSSVariable('--base-column-count', value.toString(), this.hostElement);
  }

  connectedCallback() {
    this.baseColumnCountChanged(this.baseColumnCount);
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
  
}
