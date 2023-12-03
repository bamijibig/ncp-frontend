import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubconnectionPrecomTestComponent } from './pubconnection-precom-test.component';

describe('PubconnectionPrecomTestComponent', () => {
  let component: PubconnectionPrecomTestComponent;
  let fixture: ComponentFixture<PubconnectionPrecomTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PubconnectionPrecomTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PubconnectionPrecomTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
