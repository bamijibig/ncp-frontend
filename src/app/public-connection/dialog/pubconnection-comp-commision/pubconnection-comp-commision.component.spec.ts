import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubconnectionCompCommisionComponent } from './pubconnection-comp-commision.component';

describe('PubconnectionCompCommisionComponent', () => {
  let component: PubconnectionCompCommisionComponent;
  let fixture: ComponentFixture<PubconnectionCompCommisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PubconnectionCompCommisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PubconnectionCompCommisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
