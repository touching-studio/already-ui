import { Component, Host, h, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'already-card',
  styleUrl: 'already-card.css',
  shadow: true,
})
export class AlreadyCard implements ComponentInterface {

  render() {
    return (
      <Host>
        <div>
          <slot></slot>
        </div>
      </Host>
    );
  }

}
