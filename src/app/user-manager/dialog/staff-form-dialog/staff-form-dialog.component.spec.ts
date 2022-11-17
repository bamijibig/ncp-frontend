import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffFormDialogComponent } from './staff-form-dialog.component';

describe('StaffFormDialogComponent', () => {
  let component: StaffFormDialogComponent;
  let fixture: ComponentFixture<StaffFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffFormDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
