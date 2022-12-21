import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionPrecomTestComponent } from './connection-precom-test.component';

describe('ConnectionPrecomTestComponent', () => {
  let component: ConnectionPrecomTestComponent;
  let fixture: ComponentFixture<ConnectionPrecomTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectionPrecomTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnectionPrecomTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
