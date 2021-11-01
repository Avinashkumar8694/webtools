import { TestBed } from '@angular/core/testing';

import { SdServicesService } from './sd-services.service';

describe('SdServicesService', () => {
  let service: SdServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SdServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
