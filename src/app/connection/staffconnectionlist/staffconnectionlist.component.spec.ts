import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffconnectionlistComponent } from './staffconnectionlist.component';

describe('StaffconnectionlistComponent', () => {
  let component: StaffconnectionlistComponent;
  let fixture: ComponentFixture<StaffconnectionlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffconnectionlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffconnectionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
