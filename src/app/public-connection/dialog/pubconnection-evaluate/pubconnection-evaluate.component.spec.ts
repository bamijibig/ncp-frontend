import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubconnectionEvaluateComponent } from './pubconnection-evaluate.component';

describe('PubconnectionEvaluateComponent', () => {
  let component: PubconnectionEvaluateComponent;
  let fixture: ComponentFixture<PubconnectionEvaluateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PubconnectionEvaluateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PubconnectionEvaluateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
