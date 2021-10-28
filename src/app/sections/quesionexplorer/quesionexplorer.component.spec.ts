import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuesionexplorerComponent } from './quesionexplorer.component';

describe('QuesionexplorerComponent', () => {
  let component: QuesionexplorerComponent;
  let fixture: ComponentFixture<QuesionexplorerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuesionexplorerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuesionexplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
