import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HubFormDialogComponent } from './hub-form-dialog.component';

describe('HubFormDialogComponent', () => {
  let component: HubFormDialogComponent;
  let fixture: ComponentFixture<HubFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HubFormDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HubFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
