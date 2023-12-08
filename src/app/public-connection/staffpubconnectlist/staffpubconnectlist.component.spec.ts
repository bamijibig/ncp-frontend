import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffpubconnectlistComponent } from './staffpubconnectlist.component';

describe('StaffpubconnectlistComponent', () => {
  let component: StaffpubconnectlistComponent;
  let fixture: ComponentFixture<StaffpubconnectlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffpubconnectlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffpubconnectlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
