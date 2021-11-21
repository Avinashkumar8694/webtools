import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessNameGeneratorComponent } from './business-name-generator.component';

describe('BusinessNameGeneratorComponent', () => {
  let component: BusinessNameGeneratorComponent;
  let fixture: ComponentFixture<BusinessNameGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessNameGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessNameGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
