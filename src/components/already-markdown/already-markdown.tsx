import { Component, Host, h, ComponentInterface, Prop } from '@stencil/core';
import { parse } from "marked";

@Component({
  tag: 'already-markdown',
  styleUrl: 'already-markdown.css',
  shadow: true,
})
export class AlreadyMarkdown implements ComponentInterface {

  @Prop() src: string;

  render() {
    return (
      <Host>
        <div innerHTML={parse(this.src || '')}></div>
      </Host>
    );
  }

}
