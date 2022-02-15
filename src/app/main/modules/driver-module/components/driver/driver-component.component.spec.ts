import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverComponent } from 'src/app/main/modules/driver-module/components/driver/driver-component.component';

describe('DriverComponentComponent', () => {
  let component: DriverComponent;
  let fixture: ComponentFixture<DriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DriverComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    DriverComponent;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
