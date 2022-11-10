import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorRegComponent } from './contractor-reg.component';

describe('ContractorRegComponent', () => {
  let component: ContractorRegComponent;
  let fixture: ComponentFixture<ContractorRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractorRegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractorRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
