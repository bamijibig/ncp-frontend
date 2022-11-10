import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllconnectionComponent } from './allconnection.component';

describe('AllconnectionComponent', () => {
  let component: AllconnectionComponent;
  let fixture: ComponentFixture<AllconnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllconnectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllconnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
