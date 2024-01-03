import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorRegDialogComponent } from './contractor-reg-dialog.component';

describe('ContractorRegDialogComponent', () => {
  let component: ContractorRegDialogComponent;
  let fixture: ComponentFixture<ContractorRegDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractorRegDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractorRegDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
