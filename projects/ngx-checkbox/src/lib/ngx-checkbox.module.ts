import { NgModule } from '@angular/core';
import { NgxCheckboxComponent } from './ngx-checkbox.component';
import { NgxCheckboxDirective } from './ngx-checkbox.directive';



@NgModule({
  declarations: [
    NgxCheckboxComponent,
    NgxCheckboxDirective
  ],
  imports: [
  ],
  exports: [
    NgxCheckboxComponent,
    NgxCheckboxDirective
  ]
})
export class NgxCheckboxModule { }
