import { TestBed } from '@angular/core/testing';

import { MyCalcService } from './my-calc.service';

describe('MyCalcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyCalcService = TestBed.get(MyCalcService);
    expect(service).toBeTruthy();
  });
});
