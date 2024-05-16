import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionCompCommisionComponent } from './connection-comp-commision.component';

describe('ConnectionCompCommisionComponent', () => {
  let component: ConnectionCompCommisionComponent;
  let fixture: ComponentFixture<ConnectionCompCommisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectionCompCommisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnectionCompCommisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
