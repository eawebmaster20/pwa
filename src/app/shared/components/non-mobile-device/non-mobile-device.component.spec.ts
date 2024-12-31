import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonMobileDeviceComponent } from './non-mobile-device.component';

describe('NonMobileDeviceComponent', () => {
  let component: NonMobileDeviceComponent;
  let fixture: ComponentFixture<NonMobileDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NonMobileDeviceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NonMobileDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
