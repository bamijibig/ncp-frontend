import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionFormDialogComponent } from './region-form-dialog.component';

describe('RegionFormDialogComponent', () => {
  let component: RegionFormDialogComponent;
  let fixture: ComponentFixture<RegionFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionFormDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegionFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
