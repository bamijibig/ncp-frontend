import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HubDeleteDialogComponent } from './hub-delete-dialog.component';

describe('HubDeleteDialogComponent', () => {
  let component: HubDeleteDialogComponent;
  let fixture: ComponentFixture<HubDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HubDeleteDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HubDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
