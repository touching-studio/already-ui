import { Component, Host, h, ComponentInterface, Prop, Element, Method } from '@stencil/core';
import { updateCSSVariable } from '../../utils/update-css-variable';
import { wrappedViewBreakpoints } from '../../utils/view-breakpoints';

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
    return this.sm || this.actualXs;
  }

  private get actualMd() {
    return this.md || this.actualSm;
  }

  private get actualLg() {
    return this.lg || this.actualMd;
  }

  private get actualXl() {
    return this.xl || this.actualLg;
  }

  private get actualXxl() {
    return this.xxl || this.actualXl;
  }

  @Element() hostElement: HTMLAlreadyColElement;

  @Prop({ reflect: true }) xs: number = 12;
  @Prop({ reflect: true }) sm: number;
  @Prop({ reflect: true }) md: number;
  @Prop({ reflect: true }) lg: number;
  @Prop({ reflect: true }) xl: number;
  @Prop({ reflect: true }) xxl: number;

  @Method()
  async rowWidthChanged(width: number) {
    if (width >= wrappedViewBreakpoints.xxl) {
      this.fraction = this.actualXxl;
    } else if (width >= wrappedViewBreakpoints.xl) {
      this.fraction = this.actualXl;
    } else if (width >= wrappedViewBreakpoints.lg) {
      this.fraction = this.actualLg;
    } else if (width >= wrappedViewBreakpoints.md) {
      this.fraction = this.actualMd;
    } else if (width >= wrappedViewBreakpoints.sm) {
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
