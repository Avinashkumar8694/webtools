import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionexplorerComponent } from './questionexplorer.component';

describe('QuestionexplorerComponent', () => {
  let component: QuestionexplorerComponent;
  let fixture: ComponentFixture<QuestionexplorerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionexplorerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionexplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
