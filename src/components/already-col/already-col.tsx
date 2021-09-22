import { Component, Host, h, ComponentInterface, Prop, Element, Method } from '@stencil/core';
import { updateCSSVariable } from '../../utils/update-css-variable';

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
    if (width >= this.getWrappedViewBreakpoint('xxl')) {
      this.fraction = this.actualXxl;
    } else if (width >= this.getWrappedViewBreakpoint('xl')) {
      this.fraction = this.actualXl;
    } else if (width >= this.getWrappedViewBreakpoint('lg')) {
      this.fraction = this.actualLg;
    } else if (width >= this.getWrappedViewBreakpoint('md')) {
      this.fraction = this.actualMd;
    } else if (width >= this.getWrappedViewBreakpoint('sm')) {
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


  private getWrappedViewBreakpoint(name: string) {
    return +getComputedStyle(this.hostElement).getPropertyValue(`--wrapped-${name}`);
  }

}
