import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionEvaluateComponent } from './connection-evaluate.component';

describe('ConnectionEvaluateComponent', () => {
  let component: ConnectionEvaluateComponent;
  let fixture: ComponentFixture<ConnectionEvaluateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectionEvaluateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnectionEvaluateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
