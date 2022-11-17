import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllContractorFormDialogComponent } from './all-contractor-form-dialog.component';

describe('AllContractorFormDialogComponent', () => {
  let component: AllContractorFormDialogComponent;
  let fixture: ComponentFixture<AllContractorFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllContractorFormDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllContractorFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
