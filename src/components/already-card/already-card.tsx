import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'already-card',
  styleUrl: 'already-card.css',
  shadow: true,
})
export class AlreadyCard {

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
