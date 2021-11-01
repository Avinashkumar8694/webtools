import { TestBed } from '@angular/core/testing';

import { QuestionExplorerService } from './question-explorer.service';

describe('QuestionExplorerService', () => {
  let service: QuestionExplorerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionExplorerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
