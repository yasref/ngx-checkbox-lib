import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[NgxCheckbox]'
})
export class NgxCheckboxDirective {
  @Input() color = '#3c3c3c';
  @Input() backColor = '#fff';
  @Input() borderColor = '#c6c6c6';
  @Input() shadow = '0px 0px 4px 1px #6c6c6c';

  @Input() cWidth = '20px';
  @Input() cHeight = '20px';

  @Input() checkWidth = '6px';
  @Input() checkHeight = '10px';
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.init();
  }
  outlineWidth = '2px';
  ngOnChanges(): void {
    this.init();
  }
  init() {
    if (['1px', '2px', '3px', '4px'].includes(this.checkWidth)) {
      this.outlineWidth = '1px';
    }
    this.el.nativeElement.style.cssText = `
        position: relative;
        cursor: pointer;
        margin: 8px;
        padding: 0px;
        width: ${this.cWidth};
        height: ${this.cHeight};
        background-color: ${this.backColor};
        color: ${this.color};
    `;
    const random = Math.floor(Math.random() * (9999999999999999));
    const cssClassName = `ngx-checkbox-${random}`
    const styleElem = document.head.appendChild(document.createElement("style"));
    styleElem.innerHTML = `
     .${cssClassName}:before {
          content: '';
          display: block;
          position: absolute;
          width: ${this.cWidth};
          height: ${this.cHeight};
          top: 50%;
          left: 50%;
          background-color: inherit;
          outline: 1px ${this.borderColor} solid;
          transform: translate(-50%, -50%);
      }
      .${cssClassName}:checked:before {
          content: '';
          display: block;
          position: absolute;
          width: ${this.cWidth};
          height: ${this.cHeight};
          top: 50%;
          left: 50%;
          background-color: ${this.backColor};
          outline: 1px ${this.borderColor} solid;
          transform: translate(-50%, -50%);
          box-shadow: ${this.shadow};
       }
      .${cssClassName}:checked:after {
            content: '';
            display: block;
            width: ${this.checkWidth};
            height: ${this.checkHeight};
            border: solid;
            border-width: 0 ${this.outlineWidth} ${this.outlineWidth} 0;
            border-color: ${this.color};
            position: absolute;
            top: 40%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(45deg);
      }
      .${cssClassName}:focus-visible{
        outline:unset;
      }

    `;
    this.renderer.addClass(this.el.nativeElement, cssClassName);

    // const b = document.createElement('span');
    // const f = document.createElement('span');
    // this.el.nativeElement.appendChild(b);
    // this.el.nativeElement.appendChild(f);
  }
}
