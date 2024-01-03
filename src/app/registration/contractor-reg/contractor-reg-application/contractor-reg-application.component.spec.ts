import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorRegApplicationComponent } from './contractor-reg-application.component';

describe('ContractorRegApplicationComponent', () => {
  let component: ContractorRegApplicationComponent;
  let fixture: ComponentFixture<ContractorRegApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractorRegApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractorRegApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
