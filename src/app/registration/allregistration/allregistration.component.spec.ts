import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllregistrationComponent } from './allregistration.component';

describe('AllregistrationComponent', () => {
  let component: AllregistrationComponent;
  let fixture: ComponentFixture<AllregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllregistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
