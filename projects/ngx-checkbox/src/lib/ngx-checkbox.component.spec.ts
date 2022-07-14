import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCheckboxComponent } from './ngx-checkbox.component';

describe('NgxCheckboxComponent', () => {
  let component: NgxCheckboxComponent;
  let fixture: ComponentFixture<NgxCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxCheckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
