import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessHubComponent } from './business-hub.component';

describe('BusinessHubComponent', () => {
  let component: BusinessHubComponent;
  let fixture: ComponentFixture<BusinessHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessHubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
