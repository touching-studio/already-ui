import{r as t,h as r,H as s,g as e}from"./p-0948593b.js";const a=class{constructor(r){t(this,r)}render(){return r(s,null,r("button",null,r("slot",null)))}};a.style=":host{--color:hsl(0, 0%, 100%);--background:hsl(220, 100%, 60%);--background-hover:hsl(220, 100%, 65%);--background-active:hsl(220, 100%, 55%);--border-color:hsl(220, 100%, 30%);--border-width:1px;--border-radius:.15rem;--padding:.5rem;display:block}button{cursor:pointer;color:var(--color);font-weight:bold;padding:var(--padding);border-radius:var(--border-radius);border:var(--border-width) solid var(--border-color);background:var(--background)}button:hover{background:var(--background-hover)}button:active{background:var(--background-active)}";const o=class{constructor(r){t(this,r)}render(){return r(s,null,r("div",null,r("slot",null)))}};function i(t,r,s){null==s||s.style.setProperty(t,r)}o.style=":host{--background:hsl(0, 0%, 98%);--border-color:hsl(0, 0%, 80%);--border-width:1px;--border-radius:.15rem;--shadow-depth:0;--shadow-color:hsl(0, 0%, 50%);--padding:.5rem;display:block;margin:.25rem}div{box-sizing:border-box;background:var(--background);height:100%;width:100%;padding:var(--padding);border:var(--border-width) solid var(--border-color);border-radius:var(--border-radius);box-shadow:0 var(--shadow-depth) var(--shadow-depth) 0 var(--shadow-color)}";const n=class{constructor(r){t(this,r),this.xs=12}set fraction(t){i("--fraction",t.toString(),this.hostElement)}get actualXs(){return this.xs||12}get actualSm(){return this.sm||this.actualXs}get actualMd(){return this.md||this.actualSm}get actualLg(){return this.lg||this.actualMd}get actualXl(){return this.xl||this.actualLg}get actualXxl(){return this.xxl||this.actualXl}async rowWidthChanged(t){switch(!0){case t>=this.getWrappedViewBreakpoint("xxl"):this.fraction=this.actualXxl;break;case t>=this.getWrappedViewBreakpoint("xl"):this.fraction=this.actualXl;break;case t>=this.getWrappedViewBreakpoint("lg"):this.fraction=this.actualLg;break;case t>=this.getWrappedViewBreakpoint("md"):this.fraction=this.actualMd;break;case t>=this.getWrappedViewBreakpoint("sm"):this.fraction=this.actualSm;break;default:this.fraction=this.actualXs}}connectedCallback(){this.fraction=this.actualXs}render(){return r(s,null,r("slot",null))}getWrappedViewBreakpoint(t){return+getComputedStyle(this.hostElement).getPropertyValue(`--wrapped-${t}`)}get hostElement(){return e(this)}};function d(t,r){new ResizeObserver((t=>{t.forEach((t=>{r.forEach((r=>r.call(this,t)))}))})).observe(t)}n.style=":host{width:calc(var(--fraction) / var(--base-column-count) * 100%)}";const l=class{constructor(r){t(this,r)}connectedCallback(){d.call(this,this.hostElement,[this.updateContentMaxWidthForViewBreakpoint])}render(){return r(s,null,r("div",null,r("slot",null)))}updateContentMaxWidthForViewBreakpoint(t){const r=t.contentRect.width;switch(!0){case r>=this.getViewBreakpoint("xxl"):i("--content-max-width",`${this.getWrappedViewBreakpoint("xxl")}px`,this.hostElement);break;case r>=this.getViewBreakpoint("xl"):i("--content-max-width",`${this.getWrappedViewBreakpoint("xl")}px`,this.hostElement);break;case r>=this.getViewBreakpoint("lg"):i("--content-max-width",`${this.getWrappedViewBreakpoint("lg")}px`,this.hostElement);break;case r>=this.getViewBreakpoint("md"):i("--content-max-width",`${this.getWrappedViewBreakpoint("md")}px`,this.hostElement);break;case r>=this.getViewBreakpoint("sm"):i("--content-max-width",`${this.getWrappedViewBreakpoint("sm")}px`,this.hostElement);break;default:i("--content-max-width","100%",this.hostElement)}}getViewBreakpoint(t){return+getComputedStyle(this.hostElement).getPropertyValue(`--${t}`)}getWrappedViewBreakpoint(t){return+getComputedStyle(this.hostElement).getPropertyValue(`--wrapped-${t}`)}get hostElement(){return e(this)}};l.style=":host{--xs:0;--sm:576;--md:768;--lg:992;--xl:1200;--xxl:1400;--wrapped-xs:0;--wrapped-sm:540;--wrapped-md:720;--wrapped-lg:960;--wrapped-xl:1140;--wrapped-xxl:1320}:host{display:block}div{max-width:var(--content-max-width);margin:auto}";const h=class{constructor(r){t(this,r),this.baseColumnCount=12}baseColumnCountChanged(t){i("--base-column-count",t.toString(),this.hostElement)}connectedCallback(){this.baseColumnCountChanged(this.baseColumnCount)}render(){return r(s,null,r("slot",null))}get hostElement(){return e(this)}static get watchers(){return{baseColumnCount:["baseColumnCountChanged"]}}};h.style=":host{--xs:0;--sm:576;--md:768;--lg:992;--xl:1200;--xxl:1400;--wrapped-xs:0;--wrapped-sm:540;--wrapped-md:720;--wrapped-lg:960;--wrapped-xl:1140;--wrapped-xxl:1320}:host{display:block;width:100%;height:auto}";const c=class{constructor(r){t(this,r)}connectedCallback(){d.call(this,this.hostElement,[this.notifyWidthChangeToColElements])}render(){return r(s,null,r("slot",null))}notifyWidthChangeToColElements(t){const r=t.contentRect.width;this.hostElement.querySelectorAll("already-col").forEach((t=>t.rowWidthChanged(r)))}get hostElement(){return e(this)}};c.style=":host{display:flex;flex-wrap:wrap;width:100%}";export{a as already_button,o as already_card,n as already_col,l as already_container,h as already_grid,c as already_row}