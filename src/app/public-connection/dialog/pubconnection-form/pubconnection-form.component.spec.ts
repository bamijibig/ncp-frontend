import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubconnectionFormComponent } from './pubconnection-form.component';

describe('PubconnectionFormComponent', () => {
  let component: PubconnectionFormComponent;
  let fixture: ComponentFixture<PubconnectionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PubconnectionFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PubconnectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
