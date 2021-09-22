import { Component, Host, h, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'already-button',
  styleUrl: 'already-button.css',
  shadow: true,
})
export class AlreadyButton implements ComponentInterface {

  render() {
    return (
      <Host>
        <button>
          <slot></slot>
        </button>
      </Host>
    );
  }

}
