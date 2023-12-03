import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubconnectionActionComponent } from './pubconnection-action.component';

describe('PubconnectionActionComponent', () => {
  let component: PubconnectionActionComponent;
  let fixture: ComponentFixture<PubconnectionActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PubconnectionActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PubconnectionActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
