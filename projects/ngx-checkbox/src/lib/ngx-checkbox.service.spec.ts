import { TestBed } from '@angular/core/testing';

import { NgxCheckboxService } from './ngx-checkbox.service';

describe('NgxCheckboxService', () => {
  let service: NgxCheckboxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxCheckboxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
