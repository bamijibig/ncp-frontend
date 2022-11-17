import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionDeleteDialogComponent } from './region-delete-dialog.component';

describe('RegionDeleteDialogComponent', () => {
  let component: RegionDeleteDialogComponent;
  let fixture: ComponentFixture<RegionDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionDeleteDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegionDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
