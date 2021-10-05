import { Component, Host, h, ComponentInterface, Prop, Element } from '@stencil/core';
import { parse } from "marked";
import { observeMutation } from '../../utils/observe-mutation';

@Component({
  tag: 'already-markdown',
  styleUrl: 'already-markdown.css',
  shadow: true,
})
export class AlreadyMarkdown implements ComponentInterface {

  private styleElement: HTMLStyleElement;

  @Element() hostElement: HTMLAlreadyMarkdownElement;

  @Prop() src: string;

  componentWillLoad() {
    observeMutation.call(
      this,
      this.hostElement,
      {
        childList: true,
        subtree: true
      },
      [
        this.updateStyle
      ]
    );
  }

  componentDidRender() {
    this.hostElement.shadowRoot.innerHTML = parse(this.src || '');
    this.updateStyle();
  }

  render() {
    return (
      <Host></Host>
    );
  }

  private updateStyle() {
    const templateElement = this.hostElement.querySelector('template');
    const styleElement = templateElement?.content.querySelector('style');
    this.styleElement?.remove();
    this.styleElement = styleElement?.cloneNode(true) as HTMLStyleElement;
    if (styleElement) {
      this.hostElement.shadowRoot.appendChild(this.styleElement);
    }
  }

}
