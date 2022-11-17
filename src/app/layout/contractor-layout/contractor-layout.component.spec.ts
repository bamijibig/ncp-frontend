import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorLayoutComponent } from './contractor-layout.component';

describe('ContractorLayoutComponent', () => {
  let component: ContractorLayoutComponent;
  let fixture: ComponentFixture<ContractorLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractorLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractorLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
