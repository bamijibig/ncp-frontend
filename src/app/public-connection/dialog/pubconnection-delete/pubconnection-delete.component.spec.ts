import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubconnectionDeleteComponent } from './pubconnection-delete.component';

describe('PubconnectionDeleteComponent', () => {
  let component: PubconnectionDeleteComponent;
  let fixture: ComponentFixture<PubconnectionDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PubconnectionDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PubconnectionDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
