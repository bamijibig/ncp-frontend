import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllpubconnectionComponent } from './allpubconnection.component';

describe('AllpubconnectionComponent', () => {
  let component: AllpubconnectionComponent;
  let fixture: ComponentFixture<AllpubconnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllpubconnectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllpubconnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
