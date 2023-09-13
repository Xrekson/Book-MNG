import { TestBed } from '@angular/core/testing';

import { BookServoService } from './book-servo.service';

describe('BookServoService', () => {
  let service: BookServoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookServoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
