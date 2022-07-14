import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ngx-checkbox',
  templateUrl: 'ngx-checkbox.component.html',
  styles: [
  ]
})
export class NgxCheckboxComponent implements OnInit {

  constructor() { }
  @Input() color = '#3c3c3c';
  @Input() backColor = '#fff';
  @Input() borderColor = '1px rgba(0, 0, 0, 0.2) solid';
  @Input() shadow = '0px 0px 4px 1px #6c6c6c';

  @Input() cWidth = '20px';
  @Input() cHeight = '20px';

  @Input() checkWidth = '6px';
  @Input() checkHeight = '10px';

  @Input() value = true;
  @Output() checkedChanged = new EventEmitter<any>();
  ngOnInit(): void {
  }
  change($event: any) {
    console.log('🚀 ~ file: ngx-checkbox.component.ts ~ line 27 ~ NgxCheckboxComponent ~ $event', $event.target.checked);
  }
}
