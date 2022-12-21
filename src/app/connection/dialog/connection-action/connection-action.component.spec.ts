import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionActionComponent } from './connection-action.component';

describe('ConnectionActionComponent', () => {
  let component: ConnectionActionComponent;
  let fixture: ComponentFixture<ConnectionActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectionActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnectionActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
