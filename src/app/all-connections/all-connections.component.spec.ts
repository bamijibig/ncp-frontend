import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllConnectionsComponent } from './all-connections.component';

describe('AllConnectionsComponent', () => {
  let component: AllConnectionsComponent;
  let fixture: ComponentFixture<AllConnectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllConnectionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllConnectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
