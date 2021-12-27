import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { DriverComponentComponent } from './driver-component.component';

describe('DriverComponentComponent', () => {
  let component: DriverComponentComponent;
  let fixture: ComponentFixture<DriverComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DriverComponentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
