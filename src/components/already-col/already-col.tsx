import { Component, Host, h, ComponentInterface, Prop, Element, Method } from '@stencil/core';
import { updateCSSVariable } from '../../utils/update-css-variable';
import { viewBreakpoints } from '../../utils/view-breakpoints';

@Component({
  tag: 'already-col',
  styleUrl: 'already-col.css',
  shadow: true,
})
export class AlreadyCol implements ComponentInterface {

  private set fraction(value: number) {
    updateCSSVariable('--fraction', value.toString(), this.hostElement);
  }

  private get actualXs() {
    return this.xs || 12;
  }

  private get actualSm() {
    return this.sm || this.xs;
  }

  private get actualMd() {
    return this.md || this.sm;
  }

  private get actualLg() {
    return this.lg || this.md;
  }

  private get actualXl() {
    return this.xl || this.lg;
  }

  @Element() hostElement: HTMLAlreadyColElement;

  @Prop({ reflect: true }) xs: number = 12;
  @Prop({ reflect: true }) sm: number;
  @Prop({ reflect: true }) md: number;
  @Prop({ reflect: true }) lg: number;
  @Prop({ reflect: true }) xl: number;

  @Method()
  async rowWidthChanged(width: number) {
    if (width >= viewBreakpoints.xl) {
      this.fraction = this.actualXl;
    } else if (width >= viewBreakpoints.lg) {
      this.fraction = this.actualLg;
    } else if (width >= viewBreakpoints.md) {
      this.fraction = this.actualMd;
    } else if (width >= viewBreakpoints.sm) {
      this.fraction = this.actualSm;
    } else {
      this.fraction = this.actualXs;
    }
  }

  connectedCallback() {
    this.fraction = this.actualXs;
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
  
}
