import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubconnectionReqPrecomComponent } from './pubconnection-req-precom.component';

describe('PubconnectionReqPrecomComponent', () => {
  let component: PubconnectionReqPrecomComponent;
  let fixture: ComponentFixture<PubconnectionReqPrecomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PubconnectionReqPrecomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PubconnectionReqPrecomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
