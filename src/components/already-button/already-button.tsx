import { Component, Host, h, ComponentInterface, Prop } from '@stencil/core';

export type ButtonVariant = 'solid' | 'outline' | 'clear';

@Component({
  tag: 'already-button',
  styleUrl: 'already-button.css',
  shadow: true,
})
export class AlreadyButton implements ComponentInterface {

  @Prop({ reflect: true }) variant: ButtonVariant = 'solid';

  render() {
    return (
      <Host>
        <button class={`${this.variant}`}>
          <slot></slot>
        </button>
      </Host>
    );
  }
}
