import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionReqPrecomComponent } from './connection-req-precom.component';

describe('ConnectionReqPrecomComponent', () => {
  let component: ConnectionReqPrecomComponent;
  let fixture: ComponentFixture<ConnectionReqPrecomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectionReqPrecomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnectionReqPrecomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
